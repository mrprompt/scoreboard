const expect = require('expect.js');
const GistApiRepository = require('../../../../src/repositories/gist/GistApiRepository');
const mock = require('../../mock/json/gist-api.json.js');

describe('GistApiRepository', function () {
  beforeEach(function () {
    this.gists = mock.gists;
    this.repository = new GistApiRepository('http://gist.com');
  });

  it('Should get all gist', function () {
    return this.repository.get()
      .then((gists) => { expect(gists).to.eql(this.gists); });
  });

  it('Should get gist by id', function () {
    return this.repository.getById('1')
      .then((gist) => { expect(gist).to.eql(this.gists[0]); });
  });

  it('Should insert gist', function () {
    const gist = {
      id: '2',
      gist: 'bla',
    };
    const expected = [...this.gists, gist];
    return this.repository.post(gist)
      .then((gists) => { expect(gists).to.eql(expected); });
  });

  it('Should delete gist', function () {
    return this.repository.del('1')
      .then((gists) => { expect(gists).to.have.length(0); });
  });

  it('Should throw exception when not given an url', function () {
    expect(() => new GistApiRepository()).to.throwException(/Missing baseUrl parameter/);
  });
});
