const expect = require('expect.js');
const ScoreRepository = require('../../../../src/repositories/score/ScoreRepository');
const GistClient = require('../../helper/gist-client.mock');

describe('ScoreRepository', function () {
  beforeEach(function () {
    this.repository = new ScoreRepository(GistClient);
  });

  it('Should get all score', function () {
    return this.repository.get()
      .then((scores) => { expect(scores).to.be.a('array'); });
  });

  it('Should get score by id', function () {
    return this.repository.getById('cjgt16uo90001ua50jv91fy8u')
      .then((score) => { expect(score).to.be.a('object'); });
  });

  it('Should insert score', function () {
    const score = {
      score: `1
          1 2 10 I
          3 1 11 C
          1 2 19 R
          1 2 21 C
          1 1 25 C`,
    };

    return this.repository.post(score)
      .then((scores) => { expect(scores).to.be.a('array'); });
  });

  it('Should delete score', function () {
    return this.repository.del('1')
      .then((scores) => { expect(scores).to.have.length(1); });
  });
});
