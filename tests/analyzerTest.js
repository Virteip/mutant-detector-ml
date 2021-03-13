const { expect } = require('chai');
const helpers = require('../src/helpers/DNAAnalyzer');
const defaultData = require('./data/defaultData');

describe('Provide results for DNA sequence scan', async () => {
  it('Should get true for 2 horizontal sequence analysis', async () => {
    let count = 0;
    let result = false;
    const { mutantPatterns } = defaultData;

    for (let index = 0; index < mutantPatterns.length; index++) {
      if (helpers.isMutant(defaultData.horizontalPositiveDnaSequence.dna, mutantPatterns[index])) {
        count += 1;
      }
    }

    if (count > 1) {
      result = true;
    }

    expect(result).to.equal(true);
  });

  it('Should get false for 1 horizontal sequence analysis', async () => {
    let count = 0;
    let result = false;
    const { mutantPatterns } = defaultData;

    for (let index = 0; index < mutantPatterns.length; index++) {
      if (helpers.isMutant(defaultData.horizontalNegativeDnaSequence.dna, mutantPatterns[index])) {
        count += 1;
      }
    }

    if (count > 1) {
      result = true;
    }

    expect(result).to.equal(false);
  });

  it('Should get true for 2 vertical sequence analysis', async () => {
    let count = 0;
    let result = false;
    const { mutantPatterns } = defaultData;

    for (let index = 0; index < mutantPatterns.length; index++) {
      if (helpers.isMutant(defaultData.verticalPositiveDnaSequence.dna, mutantPatterns[index])) {
        count += 1;
      }
    }

    if (count > 1) {
      result = true;
    }

    expect(result).to.equal(true);
  });

  it('Should get false for 1 vertical sequence analysis', async () => {
    let count = 0;
    let result = false;
    const { mutantPatterns } = defaultData;

    for (let index = 0; index < mutantPatterns.length; index++) {
      if (helpers.isMutant(defaultData.verticalNegativeDnaSequence.dna, mutantPatterns[index])) {
        count += 1;
      }
    }

    if (count > 1) {
      result = true;
    }

    expect(result).to.equal(false);
  });

  it('Should get false for right diagonal sequence analysis', async () => {
    let count = 0;
    let result = false;
    const { mutantPatterns } = defaultData;

    for (let index = 0; index < mutantPatterns.length; index++) {
      if (helpers.isMutant(defaultData.rtNegativeDiagonalDnaSequence.dna, mutantPatterns[index])) {
        count += 1;
      }
    }

    if (count > 1) {
      result = true;
    }

    expect(result).to.equal(true);
  });

  it('Should get true for left diagonal sequence analysis', async () => {
    let count = 0;
    let result = false;
    const { mutantPatterns } = defaultData;

    for (let index = 0; index < mutantPatterns.length; index++) {
      if (helpers.isMutant(defaultData.ltNegativeDiagonalDnaSequence.dna, mutantPatterns[index])) {
        count += 1;
      }
    }

    if (count > 1) {
      result = true;
    }

    expect(result).to.equal(false);
  });
});
