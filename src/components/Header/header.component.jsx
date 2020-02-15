import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import { auth } from '../../firebase/firebase.init'
import { ReactComponent as Logo } from '../../assets/crown.logo.svg'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import './header.styles.scss'


const Header = ({ currentUser, hidden }) => (
  <div className='header' >
    <Link  
      className='logo-container' 
      to='/' >
      <Logo  className='logo' />
    </Link>
    <div className='options'>
      <Link
        className='option'
        to='/shop' >
        SHOP
      </Link>
      <Link
        className='option'
        to='/contact' >
        CONTACT
      </Link>
      {
        currentUser
          ? <Link className='option' to='/'  onClick={ () => auth.signOut() }>SIGN OUT</Link>
          : <Link className='option' to='/signin' >SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
       hidden ? null : <CartDropdown />
    }
    
  </div>
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
