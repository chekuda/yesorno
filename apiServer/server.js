import express from 'express'

import dbConnection from './database/connection'
import routes from './routes'

const app = express()

const port = process.env.PORT || 3001

// Connect to DB
const dbUrl = process.env.ENV !== 'prod'
? process.env.LOCAL_DB_URL
: process.env.REMOTE_DB_URL

dbConnection(dbUrl)

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