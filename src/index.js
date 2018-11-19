import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import AppRouter from './shared/AppRouter'
import configureStore from './shared/redux/configureStore'

const store = configureStore(window.__PRELOAD__STATE)

const render = Component => {
  hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
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
