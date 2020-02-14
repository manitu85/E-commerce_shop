import { SET_CURRENT_USER } from './user.types'


const initialState = {
  currentUser: null
}

export const userReducer = (state = initialState , action) => {
  switch (action.type) {
    case SET_CURRENT_USER: 
      return {  // new object which represent transformed state
        ...state,
        currentUser: action.payload
      }
      // break;
  
    default:
      return state
  }
}

export default userReducer



