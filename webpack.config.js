const webpackCommon = require('./build-config/webpack.common.js')
const webpackDev = require('./build-config/webpack.dev.js')
const webpackProd = require('./build-config/webpack.prod.js')

module.exports = {
  ...webpackCommon,
  ...process.env.ENV === 'dev' ? webpackDev : webpackProd
}