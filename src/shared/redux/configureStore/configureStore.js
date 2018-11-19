import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducers from '../rootReducers'

const configureStore = initialState => {
  const composeEnhancers = process.browser ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose

  return createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  )
}

export default configureStore
