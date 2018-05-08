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

  it('Should insert single score', function () {
    const score = '2\n1 2 10 I\n3 1 11 C\n1 2 19 R\n1 2 21 C\n1 1 25 C';

    return this.repository.post(score)
      .then((scores) => { expect(scores).to.be.a('array'); });
  });

  it('Should insert many scores', function () {
    const score = '2\n1 2 10 I\n3 1 11 C\n1 2 19 R\n1 2 21 C\n1 1 25 C\n\n3\n1 2 10 I\n3 1 11 C\n1 2 19 R\n1 2 21 C\n1 1 25 C';

    return this.repository.post(score)
      .then((scores) => { expect(scores).to.be.a('array'); });
  });

  it('Should delete score', function () {
    return this.repository.del('1')
      .then((scores) => { expect(scores).to.have.length(1); });
  });
});
