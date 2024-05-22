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
            {/* {login && <li><Link to='/profiles'>Users</Link></li>} */}
            <li><Link to='/success'>Success Story</Link></li>
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
          <p>Sita Ram Marriage </p>
          <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="mobile-navbar">
          <ul>
            <li><Link to='/' onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to='/about' onClick={toggleMobileMenu}>About</Link></li>
            <li><Link to='/service' onClick={toggleMobileMenu}>Service</Link></li>
            {login && <li><Link to='/profiles' onClick={toggleMobileMenu}>Users</Link></li>}
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
