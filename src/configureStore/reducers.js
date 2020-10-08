import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createBrowserHistory } from 'history'
// import { createBlacklistFilter } from 'redux-persist-transform-filter'

import app from '../AppReducer'
import news from 'feature/News/redux'

export const history = createBrowserHistory()

// const blacklistFilterKey = createBlacklistFilter('app', ['loading'])

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: [],
  whitelist: [],
  // transforms: [blacklistFilterKey],
}

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app,
    news
  })

export default persistReducer(persistConfig, rootReducer(history))
