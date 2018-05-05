const expect = require('expect.js');
const ScoreApiRepository = require('../../../../src/repositories/score/ScoreApiRepository');
const mock = require('../../mock/json/score-api.json.js');

describe('ScoreApiRepository', function () {
  beforeEach(function () {
    this.scores = mock.scores;
    this.repository = new ScoreApiRepository('http://score.com');
  });

  it('Should get all score', function () {
    return this.repository.get()
      .then((scores) => { expect(scores).to.eql(this.scores); });
  });

  it('Should get score by id', function () {
    return this.repository.getById('1')
      .then((score) => { expect(score).to.eql(this.scores[0]); });
  });

  it('Should insert score', function () {
    const score = {
      id: '2',
      score: 'bla',
    };
    const expected = [...this.scores, score];
    return this.repository.post(score)
      .then((scores) => { expect(scores).to.eql(expected); });
  });

  it('Should delete score', function () {
    return this.repository.del('1')
      .then((scores) => { expect(scores).to.have.length(0); });
  });

  it('Should throw exception when not given an url', function () {
    expect(() => new ScoreApiRepository()).to.throwException(/Missing baseUrl parameter/);
  });
});