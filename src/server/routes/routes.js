const getViews = require('../controllers/getViews')

module.exports = app => {
  app.route('/')
    .get(getViews.getHome)

  app.route('/aboutus')
    .get(getViews.getAboutUs)
}