import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cart.types"

export const toogleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
})


