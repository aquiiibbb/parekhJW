import React, { useState, useEffect } from 'react';
import './footer.css';
function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle button visibility based on scroll position
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 300) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Column 1: Contact Us */}
        <div className="footer-col">
          <h3 className="footer-heading">CONTACT US</h3>
          <p className="footer-text">
            Phone: <a href="tel:+18438132244">8438132244</a>
          </p>
          <p className="footer-text">
            Email: <a href="mailto:parekhtnv@gmail.com">parekhtnv@gmail.com</a>
          </p>
          <p className="footer-text">
            Web: <a href="https://parekhjeweler.com" target="_blank" rel="noopener noreferrer">parekhjeweler.com</a>
          </p>
          <div className="footer-address">
            <p>Parekh Jewelers</p>
            <p>10010 Coit Road 300</p>
            <p>Frisco, TX 75030</p>
          </div>
        </div>

        {/* Column 2: Repair Services (Part 1) */}
        <div className="footer-col">
          <h3 className="footer-heading">REPAIR SERVICES</h3>
          <ul className="footer-links">
            <li><a href="#ring-repairs">Ring Repairs</a></li>
            <li><a href="#ring-resizing">Ring Resizing</a></li>
            <li><a href="#chain-repairs">Chain Repairs</a></li>
            <li><a href="#pendant-repairs">Pendant Repairs</a></li>
            <li><a href="#bracelet-repairs">Bracelet Repairs</a></li>
          </ul>
        </div>

        {/* Column 3: Repair Services (Part 2) */}
        <div className="footer-col">
          <h3 className="footer-heading">REPAIR SERVICES</h3>
          <ul className="footer-links">
            <li><a href="#earring-repairs">Earring Repairs</a></li>
            <li><a href="#catches-replaced">Catches Replaced</a></li>
            <li><a href="#necklace-repairs">Necklace Repairs</a></li>
            <li><a href="#rhodium-plating">Rhodium Plating</a></li>
          </ul>
        </div>

        {/* Column 4: Customer Services */}
        <div className="footer-col">
          <h3 className="footer-heading">CUSTOMER SERVICES</h3>
          <ul className="footer-links">
            <li><a href="#shop-online">Shop Online</a></li>
            <li><a href="#log-in">Log-in</a></li>
            <li><a href="#shopping-basket">Shopping Basket</a></li>
            <li><a href="#checkout">Checkout</a></li>
            <li><a href="#returns-refunds">Returns &amp; Refunds</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">&copy; 2026 Parekh Jewelers. Trusted Legacy. Timeless Beauty.</p>
        <p className="legal-links">
          <a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-conditions">Terms &amp; Conditions</a>
        </p>
      </div>

      {/* Scroll to Top Arrow Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        &#8593;
      </button>
    </footer>
  );
}

export default Footer;