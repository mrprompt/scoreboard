const BaseRepository = require('../BaseRepository.js');

module.exports = class GistMemoryRepository extends BaseRepository {
  constructor(gists) {
    super();

    let data = gists || [
      { id: '1', content: '', comments: [] },
    ];

    this.get = () => {
      const deferred = this.defer();

      deferred.resolve(data);

      return deferred.promise;
    };

    this.getById = (id) => {
      const result = data.find(i => i.id === id);

      return this.Promise.resolve(result);
    };

    this.post = (info) => {
      data.push(info);

      return this.Promise.resolve(data);
    };

    this.del = (id) => {
      data = data.filter(element => id !== element.id);

      return this.Promise.resolve(data);
    };
  }
};
