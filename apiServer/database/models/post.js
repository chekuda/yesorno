import mongoose from 'mongoose'

const Schema = mongoose.Schema

const newSchema = new Schema({
  content: String,
  yes: Number,
  no: Number,
  date: Date
})

export const Post = mongoose.model('post', newSchema)
