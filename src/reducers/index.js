// index.js
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import sites from './sites'
import github from './github'
import imageCredit from './imageCredit'
import color from './color'
import textColor from './textColor'
import background from './background';

const rootReducer = combineReducers({
  sites,
  github,
  imageCredit,
  color,
  textColor,
  background,
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
