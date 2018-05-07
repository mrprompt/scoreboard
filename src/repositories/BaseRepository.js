const EventEmitter = require('events');
const Promise = require('bluebird');
const OctoNode = require('octonode');

const token = process.env.GITHUB_TOKEN || '';

module.exports = class BaseRepository extends EventEmitter {
  constructor(GistClient = OctoNode.client(token).gist()) {
    super();

    this.Promise = Promise;
    this.client = GistClient;

    this.defer = () => {
      const deferred = {};
      function resolver(resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
      }
      deferred.promise = new Promise(resolver);
      return deferred;
    };
  }
};
