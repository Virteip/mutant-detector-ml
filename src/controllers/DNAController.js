const DNAController = module.exports;
const DNAService = require('../services/DNAservice');
const DNAcheckerSchema = require('../validators/DNAcheckerSchema');
const Validator = require('../validators/Validator');
const sequenceValidator = require('../validators/StringValidator');

/**
 * @api {POST} /api/mutant/
 * @apiName Mutant Detector Meli
 * @apiGroup Mutant
 * @apiDescription analyze DNA sequence for mutant genes
 *
 * @apiParam (body) {object} object for edit
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200 {"count_mutant_dna":"3","count_human_dna":"6","ratio":0.5}
 *
 * @apiError (500) {Object} Internal error.
 * @apiError (400) {Object} Request contains wrong body or characters.
 * @apiError (403) {Object} Subject is human. Such an error.
 */
DNAController.isMutant = async (req, res) => {
  const { body: dna } = req;

  const bodyValidator = Validator(DNAcheckerSchema);
  const validBody = bodyValidator.validate(dna);

  if (!validBody) {
    const [firstInvalid] = bodyValidator.getError();
    const invalidMessage = firstInvalid.message;

    return res.status(400).send(invalidMessage);
  }

  const validSequences = sequenceValidator.containsValidLetters(dna);

  if (!validSequences[0]) {
    const invalidSequence = validSequences[1];

    return res.status(400).send(invalidSequence);
  }

  return DNAService.isMutant(dna, res)
    .then((answer) => (answer ? res.status(200).send() : res.status(403).send()))
    .catch((error) => res.status(400).send(error));
};

/**
 * @api {GET} /api/mutant/stats
 * @apiName Mutant Detector Meli
 * @apiGroup Mutant
 * @apiDescription analyze DNA sequence for mutant genes
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200 {"count_mutant_dna":"39","count_human_dna":"35","ratio":1.11}
 *
 * @apiError (400) {null} Error if DNA sequence belongs to a human
 * @apiError (500) {Object} Internal error.
 */
DNAController.mutantStats = async (req, res) => {
  const statistics = await DNAService.mutantStats(res);

  statistics.ratio = ((statistics.count_mutant_dna * 100) / statistics.count_human_dna) / 100;

  if (!statistics) {
    return res.status(500).send();
  }
  return res.status(200).send(statistics);
};
