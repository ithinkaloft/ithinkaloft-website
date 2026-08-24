import Container from '../common/Container';
import { ButtonLink } from '../common/Button';
import BrandMotif from '../brand/BrandMotif';
import './HomeHero.css';

export default function HomeHero() {
  return (
    <section className="home-hero">
      <Container className="home-hero-layout">
        
        {/* Left Side: Content */}
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

        {/* Right Side / Background: Motif */}
        <div className="home-hero-motif-wrapper">
          <BrandMotif />
        </div>
        
      </Container>
    </section>
  );
}
