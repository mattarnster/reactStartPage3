// reducers/github.js

import localStorageHelper from '../helpers/localStorageHelper'


const github = (state = {}, action) => {

  switch(action.type) {

    case 'AUTH_STATUS_CHANGE':
        return Object.assign({}, state, {
            ghAuthStatus: action.payload.ghAuthStatus
        })

    case 'ASSIGN_TOKEN':
        return Object.assign({}, state, {
            ghToken: action.payload.ghToken
        })

    case 'LOAD_GISTS':
        return Object.assign({}, state, {
            gists: action.payload.gists
        })

    case 'UPDATE_BACKUP_GIST_ID':
      let lsh = new localStorageHelper()
      lsh.putBackupGistId(action.payload.id) 
        return Object.assign({}, state, {
            ghBackupGistId: action.payload.id
        })

    default:
      return state
  }
}

export default github