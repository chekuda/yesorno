const express = require('express')
const path = require('path')

const routes = require('./src/server/routes/routes')

const app = express()

const port = process.env.PORT || 3000

// Serving static files
app.use(express.static(path.join(__dirname, './dist')));

routes(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})