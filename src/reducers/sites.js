// reducers/sites.js

import localStorageHelper from '../helpers/localStorageHelper'

const sites = (state = [], action) => {

  switch(action.type) {

    case 'ADD_SITE':
      let lsh = new localStorageHelper()
      lsh.putSite(action.payload)
      return [...state, action.payload]

    default:
      return state
  }
}

export default sites