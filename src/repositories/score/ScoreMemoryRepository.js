const BaseRepository = require('../BaseRepository.js');
const cuid = require('cuid');

module.exports = class ScoreMemoryRepository extends BaseRepository {
  constructor(infos) {
    super();

    let data = infos || [
      {
        id: 'cjgt16uo90001ua50jv91fy8u',
        score: [
          [1],
          [1, 2, 10, 'I'],
          [3, 1, 11, 'C'],
          [1, 2, 19, 'R'],
          [1, 2, 21, 'C'],
          [1, 1, 25, 'C'],
        ],
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

    this.postById = (id, score) => {
      const scores = data.find(i => i.id === id);

      scores.score.push(score);

      return this.Promise.resolve(data);
    };

    this.del = (id) => {
      data = data.filter(element => id !== element.id);

      return this.Promise.resolve(data);
    };
  }
};
