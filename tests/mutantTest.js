const sinon = require('sinon');
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const DNArepository = require('../src/repositories/DNArepository');
const defaultData = require('./data/defaultData');

const sandbox = sinon.createSandbox();
const API_PATH = '/api/dna-checker/';

chai.use(chaiHttp);

describe('Provide results for DNA sequence scan', async () => {
  afterEach(() => sandbox.restore());

  it('Should get boolean result and return 200', async () => {
    sandbox.stub(DNArepository, 'isMutant').resolves(defaultData.isMutant[0]);

    return chai
      .request(app)
      .post(`${API_PATH}/mutant`)
      .send(defaultData.dnaSequence)
      .then(({ status }) => {
        assert.equal(status, 200);
      });
  });

  it('Should get boolean result and return 403', async () => {
    sandbox.stub(DNArepository, 'isMutant').resolves(defaultData.isMutant[1]);

    return chai
      .request(app)
      .post(`${API_PATH}/mutant`)
      .send(defaultData.dnaSequence)
      .then(({ status }) => {
        assert.equal(status, 403);
      });
  });
});
