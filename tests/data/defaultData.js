const defaultData = module.exports;

defaultData.isMutant = [true, false];
defaultData.stats = {
  count_mutant_dna: '3',
  count_human_dna: '6',
  ratio: 0.5,
};
defaultData.mutantPatterns = ['AAAA', 'TTTT', 'CCCC', 'GGGG'];
defaultData.horizontalNegativeDnaSequence = {
  dna: ['CTGCCA', 'CAGTGC', 'TTCTGT', 'AGAAGG', 'CCCCTA', 'TCACTG'],
};
defaultData.horizontalPositiveDnaSequence = {
  dna: ['CTGCCA', 'CAGTGC', 'TTCTGT', 'AAAAGG', 'CCCCTA', 'TCACTG'],
};
defaultData.verticalNegativeDnaSequence = {
  dna: ['CTGCGA', 'CAGTGC', 'TTCTGT', 'ACAAGG', 'CTCCTA', 'TCACTG'],
};
defaultData.verticalPositiveDnaSequence = {
  dna: ['CTGCGA', 'CAGTGC', 'TTCTGT', 'ACATGG', 'CTCTTA', 'TCACTG'],
};
defaultData.rtNegativeDiagonalDnaSequence = {
  dna: ['CTGCGA', 'CCGTGC', 'TTCTGT', 'ACACGG', 'CTCTTA', 'TCACTG'],
};
defaultData.ltNegativeDiagonalDnaSequence = {
  dna: ['CTGCGA', 'CTGTAC', 'TTCAGT', 'ACACGG', 'CTCTTA', 'TCACTG'],
};
