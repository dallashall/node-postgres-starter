const Location = require('../models').Location

module.exports = {
  create(req, res) {
    console.log(req.body);
    return Location
      .create(req.body.location)
      .then(location => res.status(201).send(location))
      .catch(error => res.status(400).send(error));
  },
};
