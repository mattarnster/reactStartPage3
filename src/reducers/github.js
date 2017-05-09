// reducers/github.js

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

    default:
      return state
  }
}

export default github