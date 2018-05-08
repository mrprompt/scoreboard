const expect = require('expect.js');
const ScoreController = require('../../../src/controllers/ScoreController');

describe('ScoreController', function () {
  beforeEach(function () {
    this.repository = {
      get: () => Promise.resolve(true),
      getById: () => Promise.resolve(true),
      post: data => Promise.resolve(data),
      del: () => Promise.resolve(true),
    };

    this.controller = new ScoreController(this.repository);
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

  it('Should call post', function () {
    const req = { body: { content: '2' } };
    const res = { send: (data) => { expect(data).to.eql(2); } };

    return this.controller.post(req, res, this.next);
  });

  it('Should call post without content throws error', function () {
    const req = { body: { } };
    const res = { send: (data) => { expect(data).to.be.a('undefined'); } };

    return this.controller.post(req, res, this.next);
  });

  it('Should call del', function () {
    return this.controller.del(this.req, this.res, this.next);
  });
});
