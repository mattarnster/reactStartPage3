/**
 * Provides a method for getting bookmarks from localStorage
 */
export default class localStorageHelper {
    /**
     * @return {Array} An array of the user's bookmarks.
     */
    getSites() {
        let sites = window.localStorage.getItem('sites');
        if (sites === "") {
            console.info('Empty sites array');
            return []
        }
        return JSON.parse(sites)
    }

    putSite(site) {
        let currentSites = this.getSites()
        let newSites = [...currentSites, site]
        localStorage.setItem('sites', JSON.stringify(newSites))
    }

    removeSite(key) {
        let currentSites = this.getSites()
        currentSites.splice(key, 1)
        localStorage.setItem('sites', JSON.stringify(currentSites))
        return currentSites
    }

    replaceSites(sites) {
        localStorage.setItem('sites', JSON.stringify(sites.sites))
        return sites.sites
    }

    getAuthToken() {
        return window.localStorage.getItem('gh_auth_tok')
	}
	
	setContributors(contributors) {
        return window.localStorage.setItem('gh_contributors', contributors)
	}
	
	getContributors() {
		return window.localStorage.getItem('gh_contributors')
    }

    getBackupGistId() {
        let ghBackupGistId = window.localStorage.getItem('gh_backup_gist_id')

        if (ghBackupGistId === null || ghBackupGistId === '') {
            return null
        }

        return ghBackupGistId
    }

    putBackupGistId(id) {
        return window.localStorage.setItem('gh_backup_gist_id', id)
    }

    getProfile() {
      return JSON.parse(window.localStorage.getItem('gh_profile'))
    }

    setProfile(profile) {
      return window.localStorage.setItem('gh_profile', JSON.stringify(profile))
    }

    getColor() {
        return window.localStorage.getItem('color')
    }
  
    setColor(color) {
        return window.localStorage.setItem('color', color)
    }

    getTextColor() {
        return window.localStorage.getItem('text_color')
    }

    setTextColor(text_color) {
        return window.localStorage.setItem('text_color', text_color)
    }
}
