import { createStore, applyMiddleware, compose  } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import  { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

// NODE environmental variable
const processEnvDev = process.env.NODE_ENV === 'development'
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// Setup redux devtool
const composeEnhancers = processEnvDev ? reduxDevToolsExtension : null || compose

// Add middlewares (thunk, logger)
// const middlewares = [thunk]
// if (processEnvDev){
//   middlewares.push(logger)
// }

// Add middlewares (thunk, logger)
const middlewares = processEnvDev && [thunk, logger]

// Create store
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middlewares))
)

// Create persist store for localStorage or sessionStorage
const persistor = persistStore(store)

export { store, persistor }


