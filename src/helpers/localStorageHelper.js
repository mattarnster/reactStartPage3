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
}