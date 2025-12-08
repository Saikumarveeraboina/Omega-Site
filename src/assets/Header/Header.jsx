import React , {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../Images/logo-vsk-incl-e.png'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav>
      <Link to="/"> <img src={logo} alt="logo" className='website-logo'/> </Link>
      <div className='menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className= {isMenuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>  
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <button type="button" className='logout-button'>Logout</button>
      </ul>
    </nav>
  )
}

export default Header