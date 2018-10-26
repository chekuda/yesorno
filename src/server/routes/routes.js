import { getAppRouter } from '../controllers/viewsController'

export default app => {
  app.route('/*')
    .get(getAppRouter)
}