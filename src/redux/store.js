import { createStore, applyMiddleware, compose  } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

// Setup redux devtool
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

// Middlewares
const middlewares = [logger]

// Create store
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store


