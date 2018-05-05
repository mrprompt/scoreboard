const request = require('supertest');
const expect = require('expect.js');
const app = require('../../src/app/index.js');

describe('Score', function () {
  beforeEach(function () {
    this.server = app.server;
  });

  afterEach(function () {
    this.server.close();
  });

  it('Should get score collection', function (done) {
    request(this.server)
      .get('/v1/score')
      .expect((res) => {
        expect(res.body).to.be.an(Array);
      })
      .end(done);
  });

  it('Should get score by id', function (done) {
    request(this.server)
      .get('/v1/score/1')
      .expect((res) => {
        expect(res.body).to.be.an(Object);
      })
      .end(done);
  });
});
