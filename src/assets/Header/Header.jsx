import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Images/logo-vsk-incl-e.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="website-logo" />
      </Link>
      {/* Search Input */}
      <div className="search-container">
      <input type="text" id="input" className="search-checkbox" placeholder="Search"/>
      <label htmlFor="input" className="search-icon">🔍</label>
      </div>
      

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
  );
};

export default Header;
