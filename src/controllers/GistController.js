module.exports = class GistController {
  constructor(repository) {
    this.repository = repository;

    this.getById = (req, res, next) =>
      this.repository.getById(req.params.id)
        .then(data => res.send(data))
        .then(next)
        .catch(data => res.send(data));

    this.get = (req, res, next) =>
      this.repository.get()
        .then(data => res.send(data))
        .then(next)
        .catch(data => res.send(data));

    this.getComments = (req, res, next) =>
      this.repository.getComments(req.params.id)
        .then(data => res.send(data))
        .then(next)
        .catch(data => res.send(data));

    this.post = (req, res, next) =>
      this.repository.post(req.body)
        .then(data => res.send(data))
        .then(next)
        .catch(data => res.send(data));

    this.del = (req, res, next) =>
      this.repository.del(req.params.id)
        .then(data => res.send(data))
        .then(next)
        .catch(data => res.send(data));
  }
};
