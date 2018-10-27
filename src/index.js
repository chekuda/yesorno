import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import AppRouter from './shared/AppRouter'

const render = Component => {
  hydrate(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(AppRouter)

// Enable HMR
if(module.hot) {
  module.hot.accept('./shared/AppRouter', () => {
    const AppRouter = require('./shared/AppRouter').default;
    render(AppRouter)
  })
}
