// reducers/sites.js

import localStorageHelper from '../helpers/localStorageHelper'

var lsh = new localStorageHelper()

const sites = (state = [], action) => {

  switch(action.type) {

    case 'ADD_SITE':
      lsh.putSite(action.payload)
      return [...state, action.payload]

    case 'REMOVE_SITE':
      var sites = lsh.removeSite(action.payload.key)
      return sites

    case 'REPLACE_SITES':
      sites = lsh.replaceSites(action.payload)
      return sites

    default:
      return state
  }
}

export default sites