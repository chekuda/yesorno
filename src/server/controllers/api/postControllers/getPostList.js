import { Post } from '../../../database/models'

export const getPostList = async (req, res) => {
  try {
    const list = await Post.find()
    res.status(200).send(list)
  } catch(e) {
    res.status(404).send('No Post list created')
  }
}
