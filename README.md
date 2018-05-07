# scoreboard

Contest Scoreboard API

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mrprompt/scoreboard/tree/master)

## Before Deploy

To use gist integration, first needed create a GitHub [personal access token](https://github.com/settings/tokens/new), and set his value in
`.env` file as defined in `.env.example`. You can set as environment variable too if you don want create a `.env` file.

## End points

### Score

| Description | HTTP Verb | Uri                   |
| ----------- | --------- | --------------------- |
| List        | GET       | `/v1/score`           |
| Get Single  | GET       | `/v1/score/:id`       |
| Delete      | DELETE    | `/v1/score/:id`       |
| Add         | POST      | `/v1/score`           |
| Create Gist | POST      | `/v1/score/:id/gist`  |

### Gist

| Description | HTTP Verb | Uri                     |
| ----------- | --------- | ----------------------- |
| List        | GET       | `/v1/gist`              |
| Get Single  | GET       | `/v1/gist/:id`          |
| Delete      | DELETE    | `/v1/gist/:id`          |
| Add         | POST      | `/v1/gist`              |
| Comments    | POST      | `/v1/gist/:id/comments` |

## IMPORTANT

All information saved in score end-points is volatile and losted after application reboot. 
If you need save the score permanently, create a gist.

## License

MIT © [Thiago Paes]()

<!--
[![NPM version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url] 
[![Dependency Status][daviddm-image]][daviddm-url] 
[![Issue count][issue-image]][issue-url] 
[![Coverage percentage][coverage-image]][coverage-url]
[npm-image]: https://badge.fury.io/js/devgrid-scoreboard.svg
[npm-url]: https://npmjs.org/package/devgrid-scoreboard
[travis-image]: https://travis-ci.org/mrprompt/devgrid-scoreboard.svg?branch=master
[travis-url]: https://travis-ci.org/mrprompt/devgrid-scoreboard
[daviddm-image]: https://david-dm.org/mrprompt/devgrid-scoreboard.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mrprompt/devgrid-scoreboard
[coveralls-image]: https://coveralls.io/repos/mrprompt/devgrid-scoreboard/badge.svg
[coveralls-url]: https://coveralls.io/r/mrprompt/devgrid-scoreboard
[coverage-image]: https://codeclimate.com/github/mrprompt/devgrid-scoreboard/badges/coverage.svg
[coverage-url]: https://codeclimate.com/github/mrprompt/devgrid-scoreboard/coverage
[issue-image]: https://codeclimate.com/github/mrprompt/devgrid-scoreboard/badges/issue_count.svg
[issue-url]: https://codeclimate.com/github/mrprompt/devgrid-scoreboard
-->
