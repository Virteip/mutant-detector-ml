const chai = require('chai');
const { expect } = require('chai');
const helpers = require('../src/helpers/DNAAnalyzer');
const defaultData = require('./data/defaultData');

describe('Provide results for DNA sequence scan', async () => {
  it('Should get true for horizontal sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.dnaSequence.dna);

    expect(mutantCheck).to.equal(true);
  });

  it('Should get true for vertical sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.dnaVerticalSequence.dna);

    expect(mutantCheck).to.equal(true);
  });

  it('Should get true for right diagonal sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.dnaRightDiagonalSequence.dna);

    expect(mutantCheck).to.equal(true);
  });

  it('Should get true for left diagonal sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.dnaLeftDiagonalSequence.dna);

    expect(mutantCheck).to.equal(true);
  });
});
