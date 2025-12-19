import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Images/OMSIT.png";
import { FaPhoneAlt } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = '919246805933'
  const message = 'Hi, I want to know about this college ?'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`


  return (
    <>
      <div className="header-container">
        <div className="content">
          <div>
            <a href="tel:+919246805933" style={{ textDecoration: 'none', marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
              <FaPhoneAlt color="white" size={16} />
              <span style={{ color: 'white', marginLeft: '6px' }}>
                +91 9246805933
              </span>
            </a>
          </div>

            <p style={{ color: 'white' }}>College Code : 2174</p>

            <div style={{ marginLeft: '20px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
              >
                <RiWhatsappFill size={20} color="#25D366" style={{ marginRight: '10px' }} />
                <span style={{ color: 'white', marginRight: '40px' }}>WhatsApp</span>
              </a>

            </div>


          </div>
        </div>

        <nav className="navbar">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="website-logo" />
          </Link>
          {/* Hamburger */}
          <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Drawer */}
          <ul className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
            <span className="close-btn" onClick={() => setIsMenuOpen(false)}>X</span>

            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/products" onClick={() => setIsMenuOpen(false)}>Products</NavLink></li>
            <li><NavLink to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>

            <button className="logout-button" onClick={() => setIsMenuOpen(false)}>
              Login
            </button>
          </ul>

          {/* Desktop Menu */}
          <ul className="desktop-menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

            <button className="logout-button">Login</button>
          </ul>
        </nav>
      </>
      );
};

      export default Header;
