import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import listReducer from './listReducer'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// set up store, import provider to use redux
export default createStore(listReducer, composeEnhancers(applyMiddleware(thunk)))
