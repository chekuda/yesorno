import express from 'express'
import path from 'path'

import routes from './routes'

const app = express()

const port = process.env.PORT || 3000
if(process.env.ENV !== 'prod') {
  require('./middleware/expressMiddleware').default(app)
}
// Assets
app.use('/assets', express.static(path.resolve(__dirname, '../../assets')))

// User this ./dist because the publicPath is required in expressMiddleware
app.use('/dist', express.static(path.resolve(__dirname, '../../dist')))

//Routes
routes(app)

// Catch any error
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})