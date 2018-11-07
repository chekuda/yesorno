import express from 'express'
import path from 'path'

import dbConnection from './database/connection'
import routes from './routes'

const app = express()

const port = process.env.PORT || 3001

// Connect to DB
dbConnection()

//Routes
routes(app)

// Catch any error
app.use((err, res) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})