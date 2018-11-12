import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducers from '../../../../shared/redux/rootReducers'

import AppRouter from '../../../../shared/AppRouter'

import { fetchData } from './helpers'

export default async req => {
    const initialState = await fetchData(req.url)
    const store = createStore(
      rootReducers,
      initialState
    )
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <AppRouter />
        </StaticRouter>
      </Provider>
    )
    const preloadState = store.getState()
  
    return { content, preloadState }
}