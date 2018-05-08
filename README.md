# Contest Scoreboard API

[![Build Status](https://travis-ci.org/mrprompt/scoreboard.svg?branch=master)](https://travis-ci.org/mrprompt/scoreboard)

Want to complete in the ACM ICPC? Then you had better know how to keeop score!
Contestants are ranked first by the number of problems solved (the more the better),
then by decreasins amounts of penalty time. If two or more constants are tied in
both problems solved and penalty time, they are displayed in order of increasing team
numbers.

A problem is consdered solved by a constestant if any of the submissions for that
problem was judged correct. Penalty time is computed as the number of minutes it
took until the first correct submission for a problem was received, plus 20 minutes for
each incorrect submission prior for the correct solution. Unsolved problems incur no
time penalties.

## Input

The input begins with a single positive integer on a line by itself indication the number
of cases, each described as below. This line is followed by a blank line. There is also a
blank linke between two consecutive inputs.

The input consists of asnapshot of the judging queue, containing entries from some
or all of contestants 1 through 100 solving problems 1 through 9. Each line of input
consists of three numbers and a leeter in the format contestant problem time L, where
L can be C, I, R, U, or E. These stand for Correct, Incorrect, clarification Request,
Unjudged, and Erroneous submission. The last three cases do not affect scoring.

The lines of input appear in the order in which the submissions were received.

## Output

The output for each test case will consist of a scoreboard, sorted by the criteria described
above. Each line of output will contain a contestant number, the number of problems
solved by contestant and the total time penalty accumuluted by the contestant.

Since not all contestants are actually participating, only display those contestants who
have made a submission.

The output of two consecutives cases will separed by a blank line.

### Sample Input

```console
1
1 2 10 I
3 1 11 C
1 2 19 R
1 2 21 C
1 1 25 C
```

### Sample Output

```console
1 2 66
3 1 11
```

## Deploy

If you want store your own score, deploy it!
To use gist integration, first needed create a GitHub [personal access token](https://github.com/settings/tokens/new), and set his value in
`.env` file as defined in `.env.example`. 
You can set as environment variable too if you don want create a `.env` file.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mrprompt/scoreboard/tree/master)

## IMPORTANT

All information saved in score end-points is volatile and losted after application reboot. 
If you need save the score permanently, create a gist.

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

## License

MIT © [Thiago Paes](https://www.mrprompt.com.br)
