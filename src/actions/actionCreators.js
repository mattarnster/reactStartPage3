
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
    console.info('assign')

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
            console.log('result' + result)
            dispatch(ghAuthStatusChange(true))
            console.info('Auth state change dispatched')
            dispatch(ghAssignToken(result))
            console.info('Gh Assign Token dispatched')
        })
        .catch(error => {

        })
    }
}

export function loadGists(gists) {
    return {
        type: 'LOAD_GISTS',
        payload: {
            gists
        }
    }
}

export function addSite(values) {
    const { name, link } = values
    return {
        type: 'ADD_SITE',
        payload: {
            name,
            link
        }
    }
}

export function removeSite(key) {
    return {
        type: 'REMOVE_SITE',
        payload: {
            key
        }
    }
}

export function ghUpdateBackupGistId(id) {
    return {
        type: 'UPDATE_BACKUP_GIST_ID',
        payload: {
            id
        }
    }
}