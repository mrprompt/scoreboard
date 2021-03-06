const Controller = require('../../controllers/ScoreController');
const Repository = require('../../repositories/score/ScoreRepository');

const repository = new Repository();

const controller = new Controller(repository);

exports.loadIn = function loadIn(server) {
  server.get('v1/score', controller.get);
  server.post('v1/score', controller.post);
  server.get('v1/score/:id', controller.getById);
  server.post('v1/score/:id/gist', controller.gist);
  server.del('v1/score/:id', controller.del);
};
