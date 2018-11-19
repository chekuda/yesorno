import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../../../../shared/redux/configureStore'

import AppRouter from '../../../../shared/AppRouter'

import { fetchDataFromComponents } from './helpers'

export default async req => {
    const initialState = await fetchDataFromComponents(req.url)
    const store = configureStore(initialState)

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