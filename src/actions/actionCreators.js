
import { ghAuth } from '../api/ghAuth'

export function ghAuthStatusChange(value) {
    return {
        type: 'AUTH_STATUS_CHANGE',
        payload: {
            ghAuthStatus: value
        }
    }
}

export function ghAssignToken(auth_token) {
    // Save the token to local storage for now.

    window.localStorage.setItem('gh_auth_tok', auth_token)

    return {
        type: 'ASSIGN_TOKEN',
        payload: {
            ghToken: auth_token
        }
    }
}

export function ghAuthorise(code) {
    return async (dispatch) => {
        await ghAuth(code)
        .then(result => {
            dispatch(ghAuthStatusChange(true))
            dispatch(ghAssignToken(result))
        })
        .catch(error => {

        })
    }
}