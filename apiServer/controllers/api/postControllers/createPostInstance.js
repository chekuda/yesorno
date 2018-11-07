import { Post } from '../../../database/models'

export const createPostInstance = ({ content }) => {
  if(!content) {
    throw Error('No required details provided')
  }
  return Post({
    content,
    yes: 0,
    no: 0,
    date: new Date()
  })
}