// reducers/background.js

import localStorageHelper from '../helpers/localStorageHelper'

const background = (state = '', action) => {

    switch(action.type) {
  
        case 'SET_BACKGROUND':
            let lsh = new localStorageHelper()
            try {
                lsh.setBackground(action.payload)
            } catch (ex) {
                alert('Failed to save custom background. The file could be too large.')
            }
        return action.payload
      
        case 'LOAD_BACKGROUND':
            lsh = new localStorageHelper()
            var background = lsh.getBackground()
        return background
  
      default:
        return state
    }
  }
  
  export default background
  