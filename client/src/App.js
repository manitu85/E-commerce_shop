import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import Container from './components/global-styled/container.styles'
import GlobalStyle from './components/global-styled/global.styles'


const App = ({ currentUser, checkUserSession }) => {
 
  // componentDidMountP
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route path='/signin' render={() => 
          currentUser 
            ? <Redirect to='/' />
            : <SignInAndSignUpPage />
        } />
      </Switch>
    </Container>
    )
  
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)
