// index.js
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import sites from './sites'
import github from './github'
import imageCredit from './imageCredit'

const rootReducer = combineReducers({
  sites,
  github,
  imageCredit,
  form: formReducer.plugin({
    AddSiteForm: (state, action) => {
      switch(action.type) {
        case 'ADD_SITE':
          return undefined;
        default:
          return state
      }
    }
  })
});

export default rootReducer;
