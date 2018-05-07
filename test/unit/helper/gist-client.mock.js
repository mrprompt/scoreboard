const gistsJson = require('../mock/json/gist-api/gists.json');
const commentsJson = require('../mock/json/gist-api/comments.json');

module.exports = class GistClient {
  constructor() {
    this.list = (callback) => {
      callback(null, gistsJson);
    };

    this.get = (id, callback) => {
      callback(null, gistsJson.shift());
    };

    this.create = (gist, callback) => {
      callback(null, gistsJson.shift());
    };

    this.delete = (id, callback) => {
      callback(null, gistsJson.shift());
    };

    this.comments = (id, callback) => {
      callback(null, commentsJson);
    };
  }
};
