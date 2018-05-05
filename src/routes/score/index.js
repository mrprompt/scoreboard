const Controller = require('../../controllers/ScoreController');
const Repository = require('../../repositories/score/ScoreMemoryRepository');

const repository = new Repository();

const controller = new Controller(repository);

exports.loadIn = function loadIn(server) {
  server.get('v1/score', controller.get);
  server.get('v1/score/:id', controller.getById);
  server.del('v1/score/:id', controller.del);
};
