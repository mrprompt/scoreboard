const BaseRepository = require('../BaseRepository.js');
const OctoNode = require('octonode');

const token = process.env.GITHUB_TOKEN || '';

module.exports = class GistMemoryRepository extends BaseRepository {
  constructor(gists) {
    super();

    const gistClient = OctoNode.client(token).gist();

    let data = gists || [
      {
        url: 'https://api.github.com/gists/7a0e93fdb0c8673bd6e9e7c5274dd32a',
        forks_url: 'https://api.github.com/gists/7a0e93fdb0c8673bd6e9e7c5274dd32a/forks',
        commits_url: 'https://api.github.com/gists/7a0e93fdb0c8673bd6e9e7c5274dd32a/commits',
        id: '7a0e93fdb0c8673bd6e9e7c5274dd32a',
        git_pull_url: 'https://gist.github.com/7a0e93fdb0c8673bd6e9e7c5274dd32a.git',
        git_push_url: 'https://gist.github.com/7a0e93fdb0c8673bd6e9e7c5274dd32a.git',
        html_url: 'https://gist.github.com/7a0e93fdb0c8673bd6e9e7c5274dd32a',
        files: {
          'laravellocal.md': {
            filename: 'laravellocal.md',
            type: 'text/plain',
            language: 'Markdown',
            raw_url: 'https://gist.githubusercontent.com/prashanthspatil/7a0e93fdb0c8673bd6e9e7c5274dd32a/raw/49f444a0ced4e040f67161e856f236d1c4804c89/laravellocal.md',
            size: 1324,
          },
        },
        public: true,
        created_at: '2018-05-05T16:06:25Z',
        updated_at: '2018-05-05T16:06:25Z',
        description: 'Run laravel project locally',
        comments: 0,
        user: null,
        comments_url: 'https://api.github.com/gists/7a0e93fdb0c8673bd6e9e7c5274dd32a/comments',
        owner: {
          login: 'prashanthspatil',
          id: 1116166,
          avatar_url: 'https://avatars0.githubusercontent.com/u/1116166?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/prashanthspatil',
          html_url: 'https://github.com/prashanthspatil',
          followers_url: 'https://api.github.com/users/prashanthspatil/followers',
          following_url: 'https://api.github.com/users/prashanthspatil/following{/other_user}',
          gists_url: 'https://api.github.com/users/prashanthspatil/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/prashanthspatil/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/prashanthspatil/subscriptions',
          organizations_url: 'https://api.github.com/users/prashanthspatil/orgs',
          repos_url: 'https://api.github.com/users/prashanthspatil/repos',
          events_url: 'https://api.github.com/users/prashanthspatil/events{/privacy}',
          received_events_url: 'https://api.github.com/users/prashanthspatil/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
    ];

    this.get = () => {
      const deferred = this.defer();

      gistClient.list((err, result) => {
        if (err) {
          return deferred.reject(err);
        }

        return deferred.resolve(result);
      });

      return deferred.promise;
    };

    this.getById = (id) => {
      const result = data.find(i => i.id === id);

      return this.Promise.resolve(result);
    };

    this.post = (info) => {
      data.push(info);

      return this.Promise.resolve(data);
    };

    this.del = (id) => {
      data = data.filter(element => id !== element.id);

      return this.Promise.resolve(data);
    };
  }
};
