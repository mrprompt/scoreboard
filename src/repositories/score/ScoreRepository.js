const BaseRepository = require('../BaseRepository.js');
const cuid = require('cuid');

module.exports = class ScoreRepository extends BaseRepository {
  constructor() {
    super();

    let data = [
      {
        id: 'cjgt16uo90001ua50jv91fy8u',
        score: '1\n1 2 10 I\n3 1 11 C\n1 2 19 R\n1 2 21 C\n1 1 25 C',
      },
    ];

    this.get = () => {
      const deferred = this.defer();

      deferred.resolve(data);

      return deferred.promise;
    };

    this.getById = (id) => {
      const result = data.find(i => i.id === id);

      const contests = result.score.split('\n');

      return this.Promise.resolve({ contests, ...result });
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
      const score = data.find(i => i.id === id);
      const deferred = this.defer();
      const gist = {
        description: `Score #${id}`,
        public: false,
        files: {
          'score.json': {
            content: JSON.stringify(score),
          },
        },
      };

      this.client.create(gist, (err, result) => {
        if (err) {
          return deferred.reject(err);
        }

        return deferred.resolve(result);
      });

      return deferred.promise;
    };
  }
};
