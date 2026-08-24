import { Link } from 'react-router-dom';
import Container from '../../common/Container';
import './AboutClosing.css';

export default function AboutClosing() {
  return (
    <section className="about-closing">
      <Container>
        <div className="about-closing-content">
          <span className="about-closing-eyebrow" aria-hidden="true">
            ITHINKALOFT
          </span>
          <h2 className="about-closing-title">
            Different game.<br aria-hidden="true" />
            Same studio.
          </h2>
          
          <p className="about-closing-desc">
            Ideas may lead to different worlds.<br aria-hidden="true" />
            The standard stays the same.
          </p>

          <div className="about-closing-actions">
            <Link to="/games" className="button button-primary about-closing-primary-action">
              Explore our games
            </Link>
            
            <Link to="/contact" className="about-closing-secondary-action">
              Contact <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
