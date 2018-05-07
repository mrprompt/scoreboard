const request = require('supertest');
const expect = require('expect.js');
const app = require('../../src/app/index.js');

describe('App', function () {
  beforeEach(function () {
    this.server = app.server;
  });

  afterEach(function () {
    this.server.close();
  });

  it('Should get error on root route', function (done) {
    request(this.server)
      .get('/')
      .expect((res) => {
        expect(res.body).to.be.an(Object);
      })
      .end(done);
  });
});
