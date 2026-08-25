import Container from '../common/Container';
import { ButtonLink } from '../common/Button';
import './HomeHero.css';

export default function HomeHero() {
  return (
    <section className="home-hero">
      {/* Background Montage Image */}
      <div className="home-hero-image-wrapper hero-stagger" style={{ animationDelay: '100ms' }}>
        <img 
          src="/assets/brand/web/home-hero-montage.webp" 
          alt="Montage of ithinkaloft game worlds and concepts" 
          className="home-hero-image"
          width="1024"
          height="530"
          decoding="async"
        />
      </div>

      <Container className="home-hero-layout">
        {/* Content */}
        <div className="home-hero-content">
          <span className="home-hero-eyebrow hero-stagger">
            Independent Game Studio
          </span>
          <h1 className="home-hero-title hero-stagger">
            Games built<br />with care.
          </h1>
          <p className="home-hero-description hero-stagger">
            Independent games focused on satisfying mechanics, distinctive worlds, and experiences worth returning to.
          </p>
          <div className="hero-stagger">
            <ButtonLink href="#games" variant="primary" size="large">
              Explore our games ↓
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
