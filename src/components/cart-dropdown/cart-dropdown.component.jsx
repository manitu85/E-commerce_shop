import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'

import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toogleCartHidden } from '../../redux/cart/cart.actions'

import {
  CartDropdownContainer,
  CartDropdownButton,
  CartEmptyMessage,
  CartItemsContainer
} from './cart-dropdown.styles'


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length // 0 == false
          ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> ))
          : (<CartEmptyMessage>Your cart is empty</CartEmptyMessage>)
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={ () => {
        history.push('/checkout')
        dispatch(toogleCartHidden())
      }} > GO TO CHECKOUT 
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown))