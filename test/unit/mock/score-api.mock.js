const { scores } = require('./json/score-api.json.js');

module.exports = function load(nock) {
  nock('http://score.com')
    .post('/score', body => body.id !== undefined)
    .times(1)
    .reply(200, (uri, requestBody) => [...scores, requestBody])
    .delete('/score/1')
    .times(1)
    .reply(200, scores.slice(1, 1))
    .get('/score')
    .times(1)
    .reply(200, scores)
    .get('/score/1')
    .times(1)
    .reply(200, scores[0]);
};
