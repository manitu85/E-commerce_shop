import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toogleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import {
  CartIconContainer,
  CartShoppingIcon,
  CartItemCount 
} from './cart-icon.styles'


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden} >
    <CartShoppingIcon />
    <CartItemCount>{itemCount}</CartItemCount>
  </CartIconContainer>
)


const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toogleCartHidden())
})


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CartIcon)