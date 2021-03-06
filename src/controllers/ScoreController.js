module.exports = class ScoreController {
  constructor(repository) {
    this.repository = repository;

    this.getById = (req, res, next) =>
      this.repository.getById(req.params.id)
        .then(data => res.send(data))
        .then(next);

    this.get = (req, res, next) =>
      this.repository.get()
        .then(data => res.send(data))
        .then(next);

    this.post = (req, res, next) =>
      this.repository.post(req.body.content)
        .then(data => res.send(data))
        .then(next);

    this.gist = (req, res, next) =>
      this.repository.gist(req.params.id)
        .then(data => res.send(data))
        .then(next);

    this.del = (req, res, next) =>
      this.repository.del(req.params.id)
        .then(data => res.send(data))
        .then(next);
  }
};
