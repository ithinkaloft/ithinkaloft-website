import Container from '../../common/Container';
import Reveal from '../../common/Reveal';
import AboutMotif from '../../brand/AboutMotif';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero">
      {/* Absolute integrated background with synchronized animated ring */}
      <AboutMotif />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-hero-grid">
          
          <div className="about-hero-content">
            <Reveal delay={0}>
              <span className="about-hero-eyebrow">
                Independent Game Studio
              </span>
              <h1 className="about-hero-title">
                Games start<br aria-hidden="true" />
                with an idea.
              </h1>
              
              <div className="about-hero-copy">
                <p>
                  ithinkaloft is an independent game studio focused on creating thoughtful, polished experiences—each with an identity of its own.
                </p>
                <p className="about-hero-statement">
                  Different game.<br aria-hidden="true" />
                  <span className="about-hero-statement-accent">Same studio.</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Empty spacer to maintain the grid layout structure for the text */}
          <div className="about-hero-spacer"></div>
          
        </div>
      </Container>
    </section>
  );
}
