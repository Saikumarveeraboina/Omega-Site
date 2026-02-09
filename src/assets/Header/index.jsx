import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../routes/Auth/AuthContext'
import Popup from 'reactjs-popup'
import { FaPhoneAlt } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'

import './index.css'

const Header = () => {
  const phoneNumber = '919246805933'
  const message = 'Hi, I want to know about this college ?'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`

  // ✅ AUTH
  const { user, logout, username } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {/* ---------- TOP BLUE BAR ---------- */}
      <div className="header-container">
        <div className="content">
          <a href="tel:+919246805933" className="top-link">
            <FaPhoneAlt size={16} />
            <span className="phone-text">+91 9246805933 </span>
          </a>

          <p className="college-code">College Code : 2174</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="top-link"
          >
            <RiWhatsappFill size={20} />
            <span className="whatsapp-text">WhatsApp</span>
          </a>
        </div>
        <div className="user-section">
          {user && <p className="welcome-text">Hello {username} , Welcome Student Portal 👋</p>}
        </div>
      </div>

      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar">
        <Link to="/">
          <img src="/Images/OMSIT.png" alt="logo" className="website-logo" />
        </Link>

        {/* ---------- MOBILE HAMBURGER ---------- */}
        <div className="popup-container">
          <Popup
            trigger={
              <button className="hamburger-btn">
                <GiHamburgerMenu size={22} />
              </button>
            }
            position="left top"
            closeOnDocumentClick
          >
            {close => (
              <div className="popup-menu">
                <NavLink to="/" onClick={close}>Home</NavLink>
                <NavLink to="/about-us" onClick={close}>About</NavLink>
                <NavLink to="/contact-us" onClick={close}>Contact</NavLink>
                <NavLink to="/syllabus" onClick={close}>Syllabus</NavLink>
                <NavLink to="/materials" onClick={close}>Materials</NavLink>
                <NavLink to="/notices" onClick={close}>Jobs</NavLink>
                <li style={{ listStyle: "none" }}>
                  <a style={{ listStyleType: "none" }}
                    href="https://omegapgcollegemca.ac.in/faculty-list-2174-MCA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Faculty
                  </a>
                </li>


                {/* 🔓 Login / Logout */}
                {!user ? (
                  <Link to="/login" onClick={close}>
                    <button className="logout-button">Login</button>
                  </Link>
                ) : (
                  <button
                    className="logout-button"
                    onClick={() => {
                      handleLogout()
                      close()
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </Popup>
        </div>

        {/* ---------- DESKTOP MENU ---------- */}
        <ul className="desktop-menu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about-us">About</NavLink></li>
          <li><NavLink to="/contact-us">Contact</NavLink></li>
          <li><NavLink to="/syllabus">Syllabus</NavLink></li>
          <li><NavLink to="/materials">Materials</NavLink></li>
          <li><NavLink to="/notices">Jobs</NavLink></li>
          <li>
            <a
              href="https://omegapgcollegemca.ac.in/faculty-list-2174-MCA.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faculty
            </a>
          </li>






          {!user ? (
            <Link to="/login">
              <button className="logout-button">Login</button>
            </Link>
          ) : (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Header;