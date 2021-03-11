const DNAservice = module.exports;
const DNARepository = require('../repositories/DNArepository');
const DNAanalyzer = require('../helpers/DNAAnalyzer');

DNAservice.isMutant = async (dna) => {
  const sequence = dna.dna;

  const result = await DNAanalyzer.isMutant(sequence);

  return DNARepository.isMutant(sequence, result);
};

DNAservice.mutantStats = async () => DNARepository.mutantStats();
