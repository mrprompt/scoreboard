const BaseRepository = require('../BaseRepository.js');
const cuid = require('cuid');

module.exports = class ScoreRepository extends BaseRepository {
  constructor(scores) {
    super();

    let data = scores || [
      {
        id: 'cjgt16uo90001ua50jv91fy8u',
        score: `1
          1 2 10 I
          3 1 11 C
          1 2 19 R
          1 2 21 C
          1 1 25 C`,
      },
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

    this.post = (score) => {
      data.push({ id: cuid(), ...score });

      return this.Promise.resolve(data);
    };

    this.del = (id) => {
      data = data.filter(element => id !== element.id);

      return this.Promise.resolve(data);
    };

    this.gist = (id) => {
      const result = data.find(i => i.id === id);

      return this.Promise.resolve(result);
    };
  }
};
