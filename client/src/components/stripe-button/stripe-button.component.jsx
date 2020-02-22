import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_D2n4Owmb51oapFkSRPoTUR9X00Cq1hmxBA'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(res => {
      alert('Payment Successful')
    }).catch(error => {
      // console.log('Payment error: ', JSON.parse(error))
      console.log('Payment Error: ', error);
      alert('There was an issue with your payment. Please sure you use the provided credit cart.')
    })


  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Manitu Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton