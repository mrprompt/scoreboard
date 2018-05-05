const { gists } = require('./json/gist-api.json.js');

module.exports = function load(nock) {
  nock('http://gist.com')
    .post('/gist', body => body.id !== undefined)
    .times(1)
    .reply(200, (uri, requestBody) => [...gists, requestBody])
    .delete('/gist/1')
    .times(1)
    .reply(200, gists.slice(1, 1))
    .get('/gist')
    .times(1)
    .reply(200, gists)
    .get('/gist/1')
    .times(1)
    .reply(200, gists[0]);
};
