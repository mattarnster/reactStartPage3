// reducers/textColor.js

import localStorageHelper from '../helpers/localStorageHelper'

const textColor = (state = '', action) => {

    switch(action.type) {
  
        case 'SET_TEXT_COLOR':
            let lsh = new localStorageHelper()
            lsh.setTextColor(action.payload)
        return action.payload
      
        // case 'LOAD_COLOR':
        //     lsh = new localStorageHelper()
        //     var color = lsh.getColor()
        // return color
  
      default:
        return state
    }
  }
  
  export default textColor
  