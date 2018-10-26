import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import AppRouter from '../../../shared/AppRouter'

export default req =>
  renderToString(
    <StaticRouter location={req.url} context={{}}>
      <AppRouter />
    </StaticRouter>
  )