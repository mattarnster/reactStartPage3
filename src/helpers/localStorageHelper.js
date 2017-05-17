/**
 * Provides a method for getting bookmarks from localStorage
 */
export default class localStorageHelper {
    /**
     * @return {Array} An array of the user's bookmarks.
     */
    getSites() {
        return JSON.parse(window.localStorage.getItem('sites'))
    }

    putSite(site) {
        let currentSites = JSON.parse(localStorage.getItem('sites'))
        let newSites = [...currentSites, site]
        localStorage.setItem('sites', JSON.stringify(newSites))
    }

    removeSite(key) {
        let currentSites = this.getSites()
        currentSites.splice(key, 1)
        localStorage.setItem('sites', JSON.stringify(currentSites))
        return currentSites
    }

    getAuthToken() {
        return window.localStorage.getItem('gh_auth_tok')
    }
}