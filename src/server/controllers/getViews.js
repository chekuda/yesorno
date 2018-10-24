const view = require('../views/view')

exports.getHome = (req, res) => {
  const data = {
    title: 'home',
    content: 'HOME PAGE'
  }
  res.send(view(data))
}