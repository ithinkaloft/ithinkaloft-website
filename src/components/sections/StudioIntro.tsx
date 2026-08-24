import Section from '../common/Section';
import Container from '../common/Container';
import { ButtonLink } from '../common/Button';
import Reveal from '../common/Reveal';
import './StudioIntro.css';

export default function StudioIntro() {
  return (
    <Section spacing="large" className="studio-intro">
      <Container>
        <Reveal delay={0} className="studio-intro-layout">
          
          <div className="studio-intro-header">
            <span className="studio-intro-eyebrow">
              About ithinkaloft
            </span>
            <h2 className="studio-intro-title">
              Small studio.<br />Big attention<br />to detail.
            </h2>
          </div>
          
          <div className="studio-intro-content">
            <p className="studio-intro-description">
              ithinkaloft is an independent game studio focused on satisfying mechanics, thoughtful progression, and the polish that makes play feel right. Different games can take different forms, but the standard stays the same: every experience should feel considered.
            </p>
            <ButtonLink href="/about" variant="ghost">
              About the studio →
            </ButtonLink>
          </div>

        </Reveal>
      </Container>
      
      {/* Faint Background Motif */}
      <div className="studio-intro-decoration" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" style={{ width: '100%', height: '100%' }}>
          <path 
            d="M 250 150 A 100 100 0 1 1 150 50" 
            stroke="var(--text-primary)" 
            strokeWidth="3"
            strokeOpacity="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </Section>
  );
}
