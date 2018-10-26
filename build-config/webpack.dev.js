const path = require('path')

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'main.js'
  },
  mode: 'development'
}