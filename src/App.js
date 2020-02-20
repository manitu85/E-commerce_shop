import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import Container from './components/global-styled/container.styles'
import GlobalStyle from './components/global-styled/global.styles'


class App extends Component {
 
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    // const { setCurrentUser, collectionsArr } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
      } 
        
      setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections', collectionsArr.map(({ title, items }) => ({ title, items})))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render() {
    const { currentUser } = this.props
    console.log(currentUser);
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
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArr: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
