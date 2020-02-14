import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.init'
import { ReactComponent as Logo } from '../../assets/crown.logo.svg'
import CartIcon from '../cart-icon/cart-icon.component'

import './header.styles.scss'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


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
        to='/' >
        SHOP
      </Link>
      <Link
        className='option'
        to='/' >
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

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden
// })


export default connect(mapStateToProps)(Header)
