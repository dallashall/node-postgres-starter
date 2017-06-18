const locationsController = require('../controllers').locations;

module.exports = app => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'This is the root of the public API.',
  }));

  app.post('/api/locations', locationsController.create);
};
