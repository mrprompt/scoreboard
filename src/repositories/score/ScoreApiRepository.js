const BaseRepository = require('../BaseRepository.js');
const request = require('request-promise').defaults({
  json: true,
});
const { throwMissingParameter } = require('../../cross-cutting');

module.exports = class ScoreApiRepository extends BaseRepository {
  constructor(baseUrl) {
    super();

    const { url = throwMissingParameter('baseUrl') } = { url: baseUrl };

    this.baseUrl = url;

    this.get = () => request.get(`${this.baseUrl}/score`);
    this.getById = id => request.get(`${this.baseUrl}/score/${id}`);
    this.post = score => request.post({ url: `${this.baseUrl}/score`, body: score });
    this.del = id => request.del(`${this.baseUrl}/score/${id}`);
  }
};
