import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './shared/AppRouter'

const render = Component => {
  hydrate(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render(AppRouter)

