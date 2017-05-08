// index.js
import { combineReducers } from 'redux';

import sites from './sites';

const rootReducer = combineReducers({
  sites
});

export default rootReducer;