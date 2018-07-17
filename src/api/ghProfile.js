import GitHub from 'github-api';
import localStorageHelper from '../helpers/localStorageHelper'

export function ghProfile() {
  let lsh = new localStorageHelper();

  let ghClient = new GitHub({
    token: lsh.getAuthToken()
  })

  var me = ghClient.getUser()

  var p1 = new Promise(function(resolve, reject) {
    me.getProfile().then((profile, err) => {
      resolve(profile)
    })
  })

  return p1
}
