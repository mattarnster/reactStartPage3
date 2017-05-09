// index.js
import { combineReducers } from 'redux';

import sites from './sites';
import github from './github'

const rootReducer = combineReducers({
  sites,
  github
});

export default rootReducer;