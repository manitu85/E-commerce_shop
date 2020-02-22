import { createStore, applyMiddleware, compose  } from 'redux'
import  { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

// NODE environmental variable
const processEnvDev = process.env.NODE_ENV === 'development'

// Redux Dev Tools Extension
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// Setup redux devtool
const composeEnhancers = processEnvDev ? reduxDevToolsExtension : null || compose

// Initialize Saga Middleware
const sagaMiddleware = createSagaMiddleware()

// Add middlewares (saga, thunk, logger)
const middlewares = [sagaMiddleware, thunk]
if (processEnvDev){
  middlewares.push(logger)
}

// const middlewares = processEnvDev && [sagaMiddleware, thunk, logger]


// Create store
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middlewares))
)

// Run Saga's middleware
sagaMiddleware.run(rootSaga)

// Create persist store for localStorage or sessionStorage
const persistor = persistStore(store)

export { store, persistor }


