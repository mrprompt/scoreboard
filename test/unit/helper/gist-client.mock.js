module.exports = {
  list: (callback) => {
    console.log('oooo');
    callback(null, []);
  },
  get: (id, callback) => {
    callback(null, { id });
  },
  create: (gist, callback) => {
    callback(null, gist);
  },
  delete: (id, callback) => {
    callback(null, { id });
  },
  comments: (id, callback) => {
    callback(null, [{ id }]);
  },
};
