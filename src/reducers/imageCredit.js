// reducers/imageCredit.js

//import localStorageHelper from '../helpers/localStorageHelper'

const imageCredit = (state = '', action) => {

  switch(action.type) {

    case 'LOAD_IMAGE_CREDIT':
      state = action.payload.credit
      return state

    default:
      return state
  }
}

export default imageCredit
