import React, { memo } from 'react'

import {
  CartItemContainer,
  CartItemDetails,
  CartItemImage
} from './cart-item.styles'

const CartItem = ({item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item'/>
    <CartItemDetails>
      <span className='name'>{name}</span>
      <span className='price'> {quantity} x ${price}</span>
    </CartItemDetails>
  </CartItemContainer>
)

export default memo(CartItem)