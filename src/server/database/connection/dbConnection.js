import mongoose from 'mongoose'

export default () => {
  mongoose.connect(
    process.env.REMOTE_DB_URL,
    { useNewUrlParser: true }
  )

  mongoose.connection.on('connected', () => {
    console.log('DB: connection open')
  })

  mongoose.connection.on('error', err =>
    console.log('DB: Connection Error ', err)
  )

  mongoose.connection.on('disconnected', err =>
    console.log('DB: Default connection disconnected ', err)
  )

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('DB: Connection disconnected through app termination')
      process.exit(0)
    })
  })
}
