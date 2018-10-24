const express = require('express')
const view = require('./src/server/views/view')
const routes = require('./src/server/routes/routes')

const app = express()

const port = process.env.PORT || 3000

routes(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})