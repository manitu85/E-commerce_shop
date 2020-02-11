import React from './node_modules/react'
import { Link } from './node_modules/react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.logo.svg'

import './header.styles.scss'

const Header = () => (
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
    </div>
  </div>
)

export default Header
