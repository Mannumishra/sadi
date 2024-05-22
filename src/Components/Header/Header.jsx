import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const login = sessionStorage.getItem("login");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="navbarmenu">
        <div className="logo">
          <p><Link to='/'>SitaRamMarriageBureau</Link></p>
        </div>
        <div className="links">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/service'>Find Your Match</Link></li>
            {/* <li><Link to='/service'>FindYourMatch</Link></li> */}
            <li><Link to='/social'>Our Social Work</Link></li>
            <li><Link to='/howwork'>How We Work</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>
        <div className="login">
          {login ? <Link to='/selfprofile' style={{ textDecoration: "none" }}><i className="ri-profile-fill"></i></Link> : <Link to='/login' style={{ textDecoration: "none" }}><i className="ri-login-box-line"></i></Link>}
        </div>
      </header>

      {/* Mobile Navbar */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
          <p>SitaRamMarriageBureau </p>
          <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="mobile-navbar">
          <ul>
            <li><Link to='/' onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to='/about' onClick={toggleMobileMenu}>About</Link></li>
            <li><Link to='/service' onClick={toggleMobileMenu}>Find Your Match</Link></li>
            <li><Link to='/social' onClick={toggleMobileMenu}>Our Social Work</Link></li>
            <li><Link to='/howwork' onClick={toggleMobileMenu}>How We Work</Link></li>
            <li><Link to='/success' onClick={toggleMobileMenu}>Success Story</Link></li>
            <li><Link to='/contact' onClick={toggleMobileMenu}>Contact</Link></li>
            <li>
              {login ? <Link to='/selfprofile' onClick={toggleMobileMenu}><i className="ri-profile-fill"></i> Profile</Link> : <Link to='/login' onClick={toggleMobileMenu}><i className="ri-login-box-line"></i> Login</Link>}
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
