import { getHome, getAboutUs } from '../controllers/getViews'

export default app => {
  app.route('/')
    .get(getHome)

  app.route('/aboutus')
    .get(getAboutUs)
}