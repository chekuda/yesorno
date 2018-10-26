const view = require('../views/view')

module.exports = (_, res, data) => {
  view(data)
    .then(currentView =>
      res.send(currentView))
    .catch(err =>
      res.status(500).send(err))
}
