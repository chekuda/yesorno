const getViews = require('../controllers/getViews')

module.exports = app => {
  app.route('/')
    .get(getViews.getHome)
}