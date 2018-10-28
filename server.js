import express from 'express'
import path from 'path'

import routes from './src/server/routes'

const app = express()

const port = process.env.PORT || 3000

if(process.env.ENV !== 'prod') {
  require('./src/server/middleware').default(app)
}
//assets
app.use('/assets', express.static(path.join(__dirname, './assets')))

// User this ./dist because the publicPath is required in expressMiddleware
app.use('/dist', express.static(path.join(__dirname, './dist')))

routes(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})