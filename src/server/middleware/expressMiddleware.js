import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'

import clienWebpack from '../../../webpack.config'
import serverWebpack from '../../../webpack.config.server'

export default app => {
  const compiler = webpack([clienWebpack, serverWebpack])

  app.use(webpackMiddleware(compiler, {
    filename: clienWebpack.output.filename,
    stats: {
      colors: true
    },
    publicPath: clienWebpack.output.publicPath,
    serverSideRender: true
  }))
}