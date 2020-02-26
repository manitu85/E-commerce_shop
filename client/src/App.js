import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.components'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import Container from './components/global-styled/container.styles'
import GlobalStyle from './components/global-styled/global.styles'


const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component.jsx'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))

const App = ({ currentUser, checkUserSession }) => {
 
  // componentDidMount
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={ <Spinner /> } >
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => 
            currentUser 
              ? <Redirect to='/' />
              : <SignInAndSignUpPage />
            } />
        </Suspense>
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
