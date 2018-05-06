const OctoNode = require('octonode');
const Controller = require('../../controllers/GistController');
const Repository = require('../../repositories/gist/GistRepository');

const token = process.env.GITHUB_TOKEN || '';
const gistClient = OctoNode.client(token).gist();

const repository = new Repository(gistClient);

const controller = new Controller(repository);

exports.loadIn = function loadIn(server) {
  server.get('v1/gist', controller.get);
  server.post('v1/gist', controller.post);
  server.get('v1/gist/:id', controller.getById);
  server.del('v1/gist/:id', controller.del);
};
