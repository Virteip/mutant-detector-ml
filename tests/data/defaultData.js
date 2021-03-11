const defaultData = module.exports;

defaultData.isMutant = [true, false];
defaultData.stats = {
  count_mutant_dna: '3',
  count_human_dna: '6',
  ratio: 0.5,
};
defaultData.dnaSequence = {
  dna: ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'],
};
defaultData.dnaVerticalSequence = {
  dna: ['ATGCGA', 'CCGTGC', 'TTATGT', 'AGAAGG', 'CACCTA', 'TCACTG'],
};
defaultData.dnaRightDiagonalSequence = {
  dna: ['ATGCGA', 'CAGTAC', 'TTATGT', 'AGAAGG', 'CACCTA', 'TCACTG'],
};
defaultData.dnaLeftDiagonalSequence = {
  dna: ['ATGCGA', 'CGGTAC', 'TTAAGT', 'AGAAGG', 'CACCTA', 'TCACTG'],
};
