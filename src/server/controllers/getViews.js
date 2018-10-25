const view = require('../views/view')

exports.getHome = (req, res) => {
  const data = {
    title: 'home',
    content: 'HOME PAGE'
  }
  res.send(view(data))
}

exports.getAboutUs = (req, res) => {
  const data = {
    title: 'about us',
    content: 'ABOUT US'
  }

  res.send(view(data))
}