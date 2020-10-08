import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import rootReducer, { history } from './reducers'
import rootSaga from './sagas'

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [routerMiddleware(history), sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  const persistor = persistStore(store)

  // sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(rootReducer({}, nextRootReducer))
    })
  }
  return { store, persistor }
}