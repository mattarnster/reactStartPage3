// store.js
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

import localStorageHelper from './helpers/localStorageHelper'


const localStorage = new localStorageHelper()

const ghAuthToken = localStorage.getAuthToken()
const ghBackupGistId = localStorage.getBackupGistId()
const ghLocalProfile = localStorage.getProfile()

if (localStorage.getSites() === null) {
  window.localStorage.setItem('sites', []);
}

if (localStorage.getColor() === null) {
  window.localStorage.setItem('color', '#aaa');
}

// Default state
const defaultState = {
  sites: (localStorage.getSites() !== null) ? localStorage.getSites() : [],
  github: {
    ghAuthStatus: (ghAuthToken ? true : false),
    ghToken: ghAuthToken,
    ghProfile: ghLocalProfile,
    gists: [],
    ghBackupGistId
  },
  imageCredit: '',
  color: localStorage.getColor(),
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
