import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { 
  CheckoutPageContainer, 
  CheckoutHeader, 
  HeaderBlock, 
  TotalContainer, 
  TestWarning 
} from './checkout.styles'


const CheckoutPage = ({cartItems, total}) => (
  <CheckoutPageContainer >
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {
      cartItems.map(cartItem =>
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )
    }
    <TotalContainer>
      <span> TOTAL: ${total.toFixed(2)} </span>
    </TotalContainer>
    <StripeCheckoutButton price={total} />
    <TestWarning>
      * Please use following test credit card for payment *
      <br/>
      Master Card - 5555 5555 5555 4444 - Exp: 03/25 - CVV: 123 
      <br/>
      Visa - 4242 4242 4242 4242 - Exp: 03/22 - CVV: 456 
    </TestWarning>
  </CheckoutPageContainer> 
)


const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems,
  total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage)