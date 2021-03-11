const DNAController = module.exports;
const DNAService = require('../services/DNAservice');
const DNAcheckerSchema = require('../validators/DNAcheckerSchema');
const Validator = require('../validators/Validator');

/**
 * @api {GET} /api/mutant/stats
 * @apiName Mutant Detector Meli
 * @apiGroup Mutants Stats
 * @apiDescription analyze DNA sequence for mutant genes
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200 {"count_mutant_dna":"3","count_human_dna":"6","ratio":0.5}
 *
 * @apiError (500) {Object} Error on internal runtime, should return nothing.
 */
DNAController.isMutant = async (req, res) => {
  const { body: dna } = req;

  const dnaSequenceValidator = Validator(DNAcheckerSchema);
  const valid = dnaSequenceValidator.validate(dna);

  if (!valid) {
    const [firstInvalid] = dnaSequenceValidator.getError();
    const invalidMessage = firstInvalid.message;

    return res.status(400).send(invalidMessage);
  }

  return DNAService.isMutant(dna, res)
    .then((answer) => (answer ? res.status(200).send() : res.status(403).send()))
    .catch((error) => res.status(400).send(error));
};

/**
 * @api {POST} /api/mutant
 * @apiName Mutant Detector Meli
 * @apiGroup Mutant
 * @apiDescription analyze DNA sequence for mutant genes
 *
 * @apiParam (body) {array} DNA strings.
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200 {} Success if DNA sequence belongs to a mutant
 * @apiError (403) {null} Error if DNA sequence belongs to a human
 * @apiError (500) {Object} Error on internal runtime, should return nothing.
 */
DNAController.mutantStats = async (req, res) => {
  const statistics = await DNAService.mutantStats(res);

  statistics.ratio = ((statistics.count_mutant_dna * 100) / statistics.count_human_dna) / 100;

  if (!statistics) {
    return res.status(400).send();
  }
  return res.status(200).send(statistics);
};
