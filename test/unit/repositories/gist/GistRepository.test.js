const expect = require('expect.js');
const GistRepository = require('../../../../src/repositories/gist/GistRepository');
const GistClient = require('../../helper/gist-client.mock');

describe('GistRepository', function () {
  beforeEach(function () {
    this.repository = new GistRepository(new GistClient());
  });

  it('Should get all gists', function () {
    return this.repository.get()
      .then((gists) => { expect(gists).to.be.a('array'); });
  });

  it('Should get gist by id', function () {
    return this.repository.getById('7a0e93fdb0c8673bd6e9e7c5274dd32a')
      .then((gist) => { expect(gist).to.have.property('id'); });
  });

  it('Should insert gist', function () {
    const gist = {
      description: 'the description for this gist',
      public: false,
      files: {
        'file1.txt': {
          content: 'String file contents',
        },
      },
    };

    return this.repository.post(gist)
      .then((result) => { expect(result).to.have.property('id'); });
  });

  it('Should delete gist', function () {
    return this.repository.del('7a0e93fdb0c8673bd6e9e7c5274dd32a')
      .then((gist) => { expect(gist).to.have.property('id'); });
  });

  it('Should get comments from gist', function () {
    return this.repository.getComments('7a0e93fdb0c8673bd6e9e7c5274dd32a')
      .then((gist) => { expect(gist).to.be.an('array'); });
  });
});
