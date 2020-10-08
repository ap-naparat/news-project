import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'connected-react-router'
import configureStore from './configureStore'
import { history } from './configureStore/reducers'
import * as serviceWorker from './serviceWorker'
import './i18n'
import './index.css';
import App from './App'
// import ScrollToTop from 'common/components/ScrollToTop'

const { store, persistor } = configureStore()
const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter persistor={persistor} history={history}>
        <App />
        {/* <ScrollToTop /> */}
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}

renderApp()

// If you want your app to work offline and load faster, you can change∏
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()