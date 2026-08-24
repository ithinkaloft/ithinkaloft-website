import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../common/Container';
import MobileNavigation from './MobileNavigation';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <header className="site-header">
        <Container className="header-container">
          <NavLink to="/" className="brand-logo" end aria-label="ithinkaloft home">
            <img 
              src="/src/assets/brand/web/ithinkaloft-wordmark.webp" 
              alt="ithinkaloft" 
              width="807" 
              height="133" 
              className="brand-logo-img"
              loading="eager"
              fetchPriority="high"
            />
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="desktop-nav">
            <ul className="nav-list">
              <li>
                <NavLink 
                  to="/games" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  Games
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Trigger */}
          <button
            ref={triggerRef}
            className="mobile-nav-trigger"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </Container>
      </header>
      
      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        triggerRef={triggerRef}
      />
    </>
  );
}
