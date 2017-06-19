const Item = require('../models').Item;

module.exports = {
  create(req, res) {
    return Item
      .create(req.body.item)
      .then(item => res.status(200).send(item))
      .catch(error => res.status(400).send(error));
  },
  fetchSingle(req, res) {
    return Item
      .findById(req.params.itemId)
      .then(item => res.status(200).send(item))
      .catch(error => res.status(400).send(error))
  },
  destroy(req, res) {
    return Item
      .find({
        where: {
          id: req.params.itemId
        },
      })
      .then(item => {
        if (item) {
          return item
            .destroy()
            .then(() => res.status(200).send(item))
            .catch(error => res.status(400).send(error));
        } else {
          res.status(404).send("Failed to find object.")
        }
      })
      .catch(error => res.status(400).send(error));
  }
};
