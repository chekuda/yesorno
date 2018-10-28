import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AppRouter from './shared/AppRouter'
import rootReducers from './shared/redux/rootReducers'

const render = Component => {
  const preloadState = window.__PRELOAD__STATE

  const store = createStore(
    rootReducers,
    preloadState,
    window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

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
