import { Post } from '../../../database/models'

export const getPostList = async (req, res) => {
  try {
    const list = await Post.find()
    return res.send(list)
  } catch(e) {
    return res.status(404).send('No Post list created')
  }
}
