const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, '../src/'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.ENV)
    })
  ]
}