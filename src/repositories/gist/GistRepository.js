const BaseRepository = require('../BaseRepository.js');

module.exports = class GistRepository extends BaseRepository {
  constructor() {
    super();

    this.get = () => {
      const deferred = this.defer();

      this.client.list((err, result) => {
        if (err) {
          return deferred.reject(err);
        }

        return deferred.resolve(result);
      });

      return deferred.promise;
    };

    this.getById = (id) => {
      const deferred = this.defer();

      this.client.get(id, (err, result) => {
        if (err) {
          return deferred.reject(err);
        }

        return deferred.resolve(result);
      });

      return deferred.promise;
    };

    this.getComments = (id) => {
      const deferred = this.defer();

      this.client.comments(id, (err, result) => {
        if (err) {
          return deferred.reject(err);
        }

        return deferred.resolve(result);
      });

      return deferred.promise;
    };

    this.post = (gist) => {
      const deferred = this.defer();

      this.client.create(gist, (err, result) => {
        if (err) {
          return deferred.reject(err);
        }

        return deferred.resolve(result);
      });

      return deferred.promise;
    };

    this.del = (id) => {
      const deferred = this.defer();

      this.client.delete(id, (err, result) => {
        if (err) {
          return deferred.reject(err);
        }

        return deferred.resolve(result);
      });

      return deferred.promise;
    };
  }
};
