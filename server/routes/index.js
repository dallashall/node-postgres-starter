const locationsController = require('../controllers').locations;
const itemsController = require('../controllers').items;

module.exports = app => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'This is the root of the public API.',
  }));

  app.post('/api/locations', locationsController.create);
  app.get('/api/locations', locationsController.list);

  app.post('/api/items', itemsController.create);
  app.get('/api/items/:itemId', itemsController.fetchSingle);
  app.delete('/api/items/:itemId', itemsController.destroy);
  // app.patch()
};
