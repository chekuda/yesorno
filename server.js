const express = require('express')
const view = require('./src/views')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send(view()))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})