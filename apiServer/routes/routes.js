import { createNewUser } from '../controllers/api/userControllers'
import { createNewPost, getPostList } from '../controllers/api/postControllers'

export default app => {
  app.route('/api/createnewuser')
    .get(createNewUser)

  app.route('/api/createnewpost')
    .get(createNewPost)

  app.route('/api/getpostlist')
    .get(getPostList)
}