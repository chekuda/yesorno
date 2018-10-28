import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducers from '../../../shared/redux/rootReducers'

import AppRouter from '../../../shared/AppRouter'

export default req => {
  const initialState = {
    articles: {
      list: [
        { id: '0', content: 'Is fish meet?', yes: 10, no: 10 },
        { id: '1', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', yes: 10, no: 10 }
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