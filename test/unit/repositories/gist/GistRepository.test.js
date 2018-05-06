const expect = require('expect.js');
const GistRepository = require('../../../../src/repositories/gist/GistRepository');

describe('GistRepository', function () {
  beforeEach(function () {
    const client = {
      list: (callback) => {
        callback(null, []);
      },
      get: (id, callback) => {
        callback(null, { id });
      },
      create: (gist, callback) => {
        callback(null, gist);
      },
      delete: (id, callback) => {
        callback(null, { id });
      },
    };

    this.repository = new GistRepository(client);
  });

  it('Should get all gists', function () {
    return this.repository.get()
      .then((gists) => { expect(gists.length).to.be.eql(0); });
  });

  it('Should get gist by id', function () {
    return this.repository.getById('1')
      .then((gist) => { expect(gist.id).to.be.eql(1); });
  });

  it('Should insert gist', function () {
    const gist = {
      description: 'the description for this gist',
      public: true,
      files: {
        'file1.txt': {
          content: 'String file contents',
        },
      },
    };

    const expected = gist;

    return this.repository.post(gist)
      .then((gists) => { expect(gists).to.eql(expected); });
  });

  it('Should delete gist', function () {
    return this.repository.del('1')
      .then((gist) => { expect(gist).to.have.property('id'); });
  });
});
