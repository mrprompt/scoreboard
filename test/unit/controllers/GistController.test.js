const expect = require('expect.js');
const GistController = require('../../../src/controllers/GistController');

describe('GistController', function () {
  beforeEach(function () {
    this.repository = {
      get: () => Promise.resolve(true),
      getById: () => Promise.resolve(true),
      post: data => Promise.resolve(data),
      getComments: data => Promise.resolve(data),
      del: () => Promise.resolve(true),
    };

    this.controller = new GistController(this.repository);
    this.res = { send: (data) => { expect(data).to.eql(true); } };
    this.next = () => {};
    this.req = {
      params: {
        id: '1',
      },
    };
  });

  it('Should call get', function () {
    return this.controller.get(null, this.res, this.next);
  });

  it('Should call getById', function () {
    return this.controller.getById(this.req, this.res, this.next);
  });

  it('Should call getComments', function () {
    return this.controller.getComments(this.req, this.res, this.next);
  });

  it('Should call post', function () {
    const req = { body: { id: '2' } };
    const res = { send: (data) => { expect(data).to.eql(req.body); } };
    return this.controller.post(req, res, this.next);
  });

  it('Should call del', function () {
    return this.controller.del(this.req, this.res, this.next);
  });
});
