import { getAppRouter } from '../controllers/controlViews/getViews'

export default app => {
  app.route('/*')
    .get(getAppRouter)
}