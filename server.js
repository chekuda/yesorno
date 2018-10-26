import express from 'express'
import path from 'path'

import routes from './src/server/routes'

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './dist')));

routes(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})