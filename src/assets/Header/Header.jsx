import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../Images/logo-vsk-incl-e.png'
import './Header.css'

const Header = () => {
  return (
    <nav>
      <Link to="/"> <img src={logo} alt="logo" className='website-logo'/> </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>  
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header