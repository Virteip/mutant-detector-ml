const { expect } = require('chai');
const helpers = require('../src/helpers/DNAAnalyzer');
const defaultData = require('./data/defaultData');

describe('Provide results for DNA sequence scan', async () => {
  it('Should get true for 2 horizontal sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.horizontalPositiveDnaSequence.dna);

    expect(mutantCheck).to.equal(true);
  });

  it('Should get false for 1 horizontal sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.horizontalNegativeDnaSequence.dna);

    expect(mutantCheck).to.equal(false);
  });

  it('Should get true for 2 vertical sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.verticalPositiveDnaSequence.dna);

    expect(mutantCheck).to.equal(true);
  });

  it('Should get false for 1 vertical sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.verticalNegativeDnaSequence.dna);

    expect(mutantCheck).to.equal(false);
  });

  it('Should get true for right diagonal sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.rightDiagonalDnaSequence.dna);

    expect(mutantCheck).to.equal(true);
  });

  it('Should get true for left diagonal sequence analysis', async () => {
    const mutantCheck = helpers.isMutant(defaultData.leftDiagonalDnaSequence.dna);

    expect(mutantCheck).to.equal(true);
  });
});
