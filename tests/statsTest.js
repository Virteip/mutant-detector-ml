const sinon = require('sinon');
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const DNArepository = require('../src/repositories/DNArepository');
const defaultResponse = require('./data/defaultData');

const sandbox = sinon.createSandbox();
const API_PATH = '/api/dna-checker/';

chai.use(chaiHttp);

describe('Provide results for DNA sequence scan', async () => {
  afterEach(() => sandbox.restore());

  it('Should get statistics', async () => {
    sandbox.stub(DNArepository, 'mutantStats').resolves(defaultResponse.stats);

    return chai
      .request(app)
      .get(`${API_PATH}/mutant/stats`)
      .then(({ status }) => {
        assert.equal(status, 200);
      });
  });
});
