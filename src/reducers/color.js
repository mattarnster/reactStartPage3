// reducers/color.js

import localStorageHelper from '../helpers/localStorageHelper'

const color = (state = '', action) => {

    switch(action.type) {
  
        case 'SET_COLOR':
            let lsh = new localStorageHelper()
            lsh.setColor(action.payload.color)
        return action.payload.color
      
        // case 'LOAD_COLOR':
        //     lsh = new localStorageHelper()
        //     var color = lsh.getColor()
        // return color
  
      default:
        return state
    }
  }
  
  export default color
  