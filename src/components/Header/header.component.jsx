import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import { auth } from '../../firebase/firebase.init'
import { ReactComponent as Logo } from '../../assets/crown.logo.svg'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { 
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink 
} from './header.styles'


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer  
      className='logo-container' 
      to='/' >
      <Logo  className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop' >SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {
        currentUser
          ? <OptionLink as='div' to='/'  onClick={ () => auth.signOut() }>SIGN OUT</OptionLink>
          : <OptionLink to='/signin' >SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser
})

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden
// })


export default connect(mapStateToProps)(Header)
