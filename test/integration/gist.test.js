const request = require('supertest');
const expect = require('expect.js');
const app = require('../../src/app/index.js');

describe('Gist', function () {
  before(function() {
    this.timeout(10000);
  });

  beforeEach(function () {
    this.server = app.server;
  });

  afterEach(function () {
    this.server.close();
  });

  it('Should get gist collection', function (done) {
    request(this.server)
      .get('/v1/gist')
      .expect((res) => {
        expect(res.body).to.be.an(Array);
      })
      .end(done);
  });

  it('Should get gist comments collection', function (done) {
    request(this.server)
      .get('/v1/gist/7588134dd98acebb52b9fea104e02665/comments')
      .expect((res) => {
        expect(res.body).to.be.an(Array);
      })
      .end(done);
  });

  it('Should get gist by id', function (done) {
    request(this.server)
      .get('/v1/gist/7588134dd98acebb52b9fea104e02665')
      .expect((res) => {
        expect(res.body).to.be.an(Object);
      })
      .end(done);
  });
});
