const Location = require('../models').Location

module.exports = {
  create(req, res) {
    // console.log(req.body);
    return Location
      .create(req.body.location)
      .then(location => res.status(200).send(location))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Location
      .all()
      .then(locations => res.status(200).send(locations))
      .catch(error => res.status(400).send(error));
  },
};
