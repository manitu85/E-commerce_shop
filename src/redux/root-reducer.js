import { combineReducers } from 'redux';
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({  // new obj where we can access through it
  user: userReducer,
  cart: cartReducer
})