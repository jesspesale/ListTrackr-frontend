import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import {createStore, applyMiddleware, compose} from 'redux'
// import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter as Router } from 'react-router-dom'
import store from "./redux/store"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// // set up store, import provider to use redux
// let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

