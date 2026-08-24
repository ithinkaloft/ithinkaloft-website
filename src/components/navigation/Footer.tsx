import { Link } from 'react-router-dom';
import Container from '../common/Container';
import './Footer.css';

// Centralized social links configuration (omitted from rendering until values exist)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const socials = {
  youtube: '',
  instagram: '',
  facebook: ''
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top-row">
          <div className="footer-brand-column">
            <Link to="/" className="footer-brand-logo">
              ithinkaloft
            </Link>
            <p className="footer-studio-line">
              Independent games built with care.
            </p>
          </div>
          
          <nav aria-label="Footer navigation" className="footer-nav">
            <ul className="footer-nav-list">
              <li>
                <Link to="/games" className="footer-link">Games</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">Privacy</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {currentYear} ithinkaloft
          </p>
          
          {/* Social Links (Rendered only when URLs are provided) */}
          <div className="footer-social-links">
            {socials.youtube && (
              <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                YouTube
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                Instagram
              </a>
            )}
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                Facebook
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
