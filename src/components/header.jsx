import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './header.css';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top Bar / Brand Container */}
      <div className="header-top-bar">
        {/* Left-Aligned Logo & Name (Stacked) */}
        <div className="header-logo-wrapper">
          <a href="/" className="logo-link" onClick={closeMobileMenu}>
            <img 
              src={logo} 
              alt="PAREKH JEWELERS" 
              className="header-logo"
            />
            <span className="logo-title">PAREKH JEWELERS</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-hamburger-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="header-nav desktop-nav">
        <ul className="nav-list">
          <li className="nav-item active">
            <a href="/">HOME</a>
          </li>

          {/* Repair Services Dropdown */}
          <li 
            className={`nav-item dropdown-parent ${isDropdownOpen ? 'active' : ''}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="#repair-services" className="nav-link">
              REPAIR SERVICES
            </a>

            {/* 3-Column Dropdown Panel (Aligned Right) */}
            <div className={`mega-menu ${isDropdownOpen ? 'show' : ''}`}>
              <div className="mega-menu-content">
                <div className="menu-column">
                  <a href="#ring-repairs">RING REPAIRS</a>
                  <a href="#ring-resizing">RING RESIZING</a>
                  <a href="#necklace-chain-repairs">NECKLACE CHAIN REPAIRS</a>
                </div>

                <div className="menu-column">
                  <a href="#pendant-repairs">PENDANT REPAIRS</a>
                  <a href="#bracelet-repairs">BRACELET REPAIRS</a>
                  <a href="#earring-repairs">EARRING REPAIRS</a>
                </div>

                <div className="menu-column">
                  <a href="#catches-replaced">CATCHES REPLACED</a>
                  <a href="#necklace-resizing">NECKLACE RESIZING</a>
                  <a href="#rhodium-gold-plating">RHODIUM &amp; GOLD PLATING</a>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a href="#how-it-works">HOW IT WORKS</a>
          </li>
          <li className="nav-item">
            <a href="#repair-examples">REPAIR EXAMPLES</a>
          </li>
          <li className="nav-item">
            <a href="#request-quote">REQUEST A QUOTE</a>
          </li>
          <li className="nav-item">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Backdrop */}
      <div 
        className={`mobile-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Slide-Out Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <button 
          className="drawer-close-btn" 
          onClick={closeMobileMenu} 
          aria-label="Close menu"
        >
          &#10005;
        </button>

        <ul className="mobile-menu-list">
          <li><a href="#home" className="gold-active" onClick={closeMobileMenu}>HOME</a></li>
          <li><a href="#how-it-works" onClick={closeMobileMenu}>HOW IT WORKS</a></li>
          <li><a href="#repair-examples" onClick={closeMobileMenu}>REPAIR EXAMPLES</a></li>
          <li><a href="#request-quote" onClick={closeMobileMenu}>REQUEST A QUOTE</a></li>
          <li><a href="#ring-repairs" onClick={closeMobileMenu}>RING REPAIRS</a></li>
          <li><a href="#ring-resizing" className="gold-active" onClick={closeMobileMenu}>RING RESIZING</a></li>
          <li><a href="#necklace-chain-repairs" onClick={closeMobileMenu}>NECKLACE CHAIN REPAIRS</a></li>
          <li><a href="#pendant-repairs" onClick={closeMobileMenu}>PENDANT REPAIRS</a></li>
          <li><a href="#bracelet-repairs" onClick={closeMobileMenu}>BRACELET REPAIRS</a></li>
          <li><a href="#earring-repairs" onClick={closeMobileMenu}>EARRING REPAIRS</a></li>
          <li><a href="#catches-replaced" onClick={closeMobileMenu}>CATCHES REPLACED</a></li>
          <li><a href="#necklace-resizing" onClick={closeMobileMenu}>NECKLACE RESIZING</a></li>
          <li><a href="#rhodium-gold-plating" onClick={closeMobileMenu}>RHODIUM &amp; GOLD PLATING</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>CONTACT</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;