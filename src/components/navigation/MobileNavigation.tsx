import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import './MobileNavigation.css';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function MobileNavigation({ isOpen, onClose, triggerRef }: MobileNavigationProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Handle focus trap, Escape key, scroll lock, and inert
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.setAttribute('inert', '');
    }

    const triggerNode = triggerRef.current;

    // Focus the first element (close button)
    const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements && focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      if (rootElement) {
        rootElement.removeAttribute('inert');
      }
      document.removeEventListener('keydown', handleKeyDown);
      
      // Return focus to trigger
      if (triggerNode) {
        triggerNode.focus();
      }
    };
  }, [isOpen, onClose, triggerRef]);

  // Handle resize to desktop closing the drawer
  useEffect(() => {
    if (!isOpen) return;
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onClose();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="mobile-nav-container">
      <div className="mobile-nav-backdrop" onClick={onClose} aria-hidden="true" />
      
      <div 
        className="mobile-nav-drawer" 
        ref={drawerRef}
        role="dialog" 
        aria-modal="true" 
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-header">
          <img 
            src="/src/assets/brand/web/ithinkaloft-wordmark.webp" 
            alt="ithinkaloft" 
            width="807" 
            height="133" 
            className="brand-logo-img"
            loading="lazy"
          />
          <button 
            className="mobile-close-btn" 
            onClick={onClose}
            aria-label="Close navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <nav id="mobile-navigation" className="mobile-nav-menu">
          <ul className="mobile-nav-list">
            <li>
              <NavLink 
                to="/games" 
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={onClose}
              >
                Games
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={onClose}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={onClose}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>,
    document.body
  );
}
