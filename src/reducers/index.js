// index.js
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import sites from './sites';
import github from './github'

const rootReducer = combineReducers({
  sites,
  github,
  form: formReducer.plugin({
    AddRemoveForm: (state, action) => {
      switch(action.type) {
        case 'ADD_SITE':
          document.getElementsByName('site_name')[0].focus()
          return undefined;
        default:
          return state
      }
    }
  })
});

export default rootReducer;