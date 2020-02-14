import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.init'

import { ReactComponent as Logo } from '../../assets/crown.logo.svg'

import './header.styles.scss'

const Header = ({ currentUser }) => (
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
    </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header)
