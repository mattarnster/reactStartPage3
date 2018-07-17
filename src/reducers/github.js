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

    case 'LOAD_PROFILE':
        let lsh = new localStorageHelper()
        lsh.setProfile(action.payload.profile)
        return Object.assign({}, state, {
          ghProfile: action.payload.profile
        })

    case 'UPDATE_BACKUP_GIST_ID':
      lsh.putBackupGistId(action.payload.id)
        return Object.assign({}, state, {
            ghBackupGistId: action.payload.id
        })

    default:
      return state
  }
}

export default github
