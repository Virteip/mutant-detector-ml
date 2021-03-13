const DNAservice = module.exports;
const DNARepository = require('../repositories/DNArepository');
const DNAanalyzer = require('../helpers/DNAAnalyzer');

DNAservice.isMutant = async (dna) => {
  const sequence = dna.dna;
  const mutantPatterns = ['AAAA', 'TTTT', 'CCCC', 'GGGG'];
  let result = false;
  let count = 0;

  for (let index = 0; index < mutantPatterns.length; index++) {
    if (DNAanalyzer.isMutant(sequence, mutantPatterns[index]) > 0) {
      count += 1;
    }
  }

  if (count > 1) {
    result = true;
  }

  return DNARepository.isMutant(sequence, result);
};

DNAservice.mutantStats = async () => DNARepository.mutantStats();
