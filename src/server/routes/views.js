import { getAppRouter } from '../controllers/viewsController'

import routes from '../../shared/AppRouter/routes'

export const views = app => {
  // VIEWS
  app.route(['/', '/addarticle'])
    .get(getAppRouter)
}