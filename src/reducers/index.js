// index.js
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import sites from './sites';
import github from './github'

const rootReducer = combineReducers({
  sites,
  github,
  form: formReducer
});

export default rootReducer;