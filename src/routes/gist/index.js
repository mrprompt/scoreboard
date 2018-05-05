const Controller = require('../../controllers/GistController');
const Repository = require('../../repositories/gist/GistMemoryRepository');

const repository = new Repository();

const controller = new Controller(repository);

exports.loadIn = function loadIn(server) {
  server.get('v1/gist', controller.get);
  server.post('v1/gist', controller.post);
  server.get('v1/gist/:id', controller.getById);
};
