import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

  const { name, imageUrl, price, quantity } = cartItem
  
  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='checkout-item'/>
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addItem(cartItem)} className='arrow'>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price.toFixed(2)}</TextContainer>
      <RemoveButton onClick={ () => clearItem(cartItem) } >&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)