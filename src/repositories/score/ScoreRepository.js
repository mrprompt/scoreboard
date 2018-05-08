const BaseRepository = require('../BaseRepository.js');
const cuid = require('cuid');

module.exports = class ScoreRepository extends BaseRepository {
  constructor(GistClient) {
    super(GistClient);

    let data = [
      {
        id: 'cjgt16uo90001ua50jv91fy8u',
        cases: 1,
        score: [
          '1 2 10 I',
          '3 1 11 C',
          '1 2 19 R',
          '1 2 21 C',
          '1 1 25 C',
        ],
        contests: [
          '1 2 66',
          '3 1 11',
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
      const scores = score.split('\n\n');

      scores.forEach((row) => {
        const rows = row.split('\n');
        const newScore = {
          id: cuid(),
          cases: rows.shift(),
          score: rows,
          contests: this.calculate(rows),
        };

        data.push(newScore);
      });

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
            content: `${score.cases}\n${score.score.join('\n')}`,
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

    this.calculate = (contests) => {
      const test = contests.filter(c => c.match(/(C|I)$/i));

      const results = {};

      test.forEach((t) => {
        const tmp = t.split(' ');
        const team = +tmp[0];
        const solutions = +tmp[1];
        const time = +tmp[2];
        const letter = tmp[3];

        if (team in results) {
          const scoreOld = results[team].split(' ');
          const newTime = +scoreOld[2] + (letter === 'I' ? time * 2 : time);

          results[team] = `${team} ${Math.max(solutions, scoreOld[1])} ${newTime}`;
        } else {
          const newTime = letter === 'I' ? time * 2 : time;

          results[team] = `${team} ${solutions} ${newTime}`;
        }

        return t;
      });

      return Object.values(results);
    };
  }
};
