import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems, total}) => (
  <div className='checkout-page' >
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )
    }
    <div className='total'>
      <span> TOTAL: ${total.toFixed(2)} </span>
    </div>
    <StripeCheckoutButton price={total} />
    <div className='test-warning'>
      * Please use following test credit card for payment *
      <br/>
      Master Card - 5555 5555 5555 4444 - Exp: 03/25 - CVV: 123 
      <br/>
      Visa - 4242 4242 4242 4242 - Exp: 03/22 - CVV: 456 
    </div>
  </div> 
)


const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems,
  total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage)