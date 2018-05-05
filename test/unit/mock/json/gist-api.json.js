
const requireDirectory = require('require-directory');

module.exports = requireDirectory(
  module,
  './gist-api',
  {
    include: path => /.*\.json$/.test(path),
    rename: name => name.replace(/(-)(\w)/gi, g => g[1].toUpperCase()),
  });
