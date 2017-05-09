// store.js
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

import localStorageHelper from './helpers/localStorageHelper'


const localStorage = new localStorageHelper()

// Default state
const defaultState = {
  sites: localStorage.getSites() ? localStorage.getSites() : [],
  github: {
    ghAuthStatus: false,
    ghToken: null
  }
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;