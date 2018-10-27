const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch', // RHL patch
    'webpack-hot-middleware/client',
    path.join(__dirname, '../src/')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'main.js',
    publicPath: '/dist/'
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}