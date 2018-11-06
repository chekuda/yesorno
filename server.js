import express from 'express'
import path from 'path'

import dbConnection from './src/server/database/connection'
import routes from './src/server/routes'

const app = express()

const port = process.env.PORT || 3000

// Connect to DB
dbConnection()

if(process.env.ENV !== 'prod') {
  require('./src/server/middleware/expressMiddleware').default(app)
}
// Assets
app.use('/assets', express.static(path.join(__dirname, './assets')))

// User this ./dist because the publicPath is required in expressMiddleware
app.use('/dist', express.static(path.join(__dirname, './dist')))

routes(app)

// Catch any error
app.use((err, res) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})