const BaseRepository = require('../BaseRepository.js');
const request = require('request-promise').defaults({
  json: true,
});
const { throwMissingParameter } = require('../../cross-cutting');

module.exports = class GistApiRepository extends BaseRepository {
  constructor(baseUrl) {
    super();

    const { url = throwMissingParameter('baseUrl') } = { url: baseUrl };

    this.baseUrl = url;

    this.get = () => request.get(`${this.baseUrl}/gist`);
    this.getById = id => request.get(`${this.baseUrl}/gist/${id}`);
    this.post = gist => request.post({ url: `${this.baseUrl}/gist`, body: gist });
    this.del = id => request.del(`${this.baseUrl}/gist/${id}`);
  }
};
