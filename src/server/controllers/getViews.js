const setViews = require('./setViews')

exports.getHome = (req, res) => {
  const data = {
    title: 'home',
    content: 'HOME PAGE'
  }
  setViews(req, res, data)
}

exports.getAboutUs = (req, res) => {
  const data = {
    title: 'about us',
    content: 'ABOUT US'
  }

  setViews(req, res, data)
}