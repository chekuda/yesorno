import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducers from '../../../../shared/redux/rootReducers'

import AppRouter from '../../../../shared/AppRouter'

export default req => {
  const initialState = {
    articles: {
      list: [
        { id: '0', content: 'Is fish meet?', yes: 10, no: 10 },
        { id: '1', content: 'Are you living in a Truman Show?', yes: 0, no: 0 },
        { id: '2', content: 'Would you eat dog', yes: 10, no: 10 },
        { id: '3', content: 'Would you eat dog', yes: 5, no: 1 }
      ]
    }
  }
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