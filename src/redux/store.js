import { createStore, applyMiddleware, compose  } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import  { persistStore } from 'redux-persist'

// Setup redux devtool
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

// Middlewares
const middlewares = []
if (process.env.NODE_ENV === 'development'){
  middlewares.push(logger)
}

// Create store
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middlewares))
)

// Create persist store for localStorage or sessionStorage
const persistor = persistStore(store)

export { store, persistor }


