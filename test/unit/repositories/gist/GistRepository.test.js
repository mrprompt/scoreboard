const expect = require('expect.js');
const GistRepository = require('../../../../src/repositories/gist/GistRepository');

xdescribe('GistRepository', function () {
  beforeEach(function () {
    this.gistClient = {
      list: () => [],
      get: (id) => [id],
      delete: (id) => {},
    };
    this.repository = new GistRepository(this.gistClient);
  });

  it('Should get all gists', function () {
    return this.repository.get()
      .then((gists) => { expect(gists).to.greaterThan(0); });
  });

  it('Should get gist by id', function () {
    return this.repository.getById('1')
      .then((score) => { expect(score).to.eql(this.scores[0]); });
  });

  it('Should insert gist', function () {
    const score = {
      id: '2',
      score: 'bla',
    };
    const expected = [...this.scores, score];
    return this.repository.post(score)
      .then((scores) => { expect(scores).to.eql(expected); });
  });

  it('Should delete gist', function () {
    return this.repository.del('1')
      .then((scores) => { expect(scores).to.have.length(0); });
  });
});
