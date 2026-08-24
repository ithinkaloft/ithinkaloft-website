
import Section from '../common/Section';
import Container from '../common/Container';
import { ButtonLink } from '../common/Button';
import Reveal from '../common/Reveal';

export default function HomeClosingCta() {
  return (
    <Section spacing="large">
      <Container>
        <Reveal delay={0} className="text-center">
          <div style={{ textAlign: 'center' }}>
          <span style={{ 
            display: 'block', 
            fontSize: '0.875rem', 
            fontWeight: 700, 
            letterSpacing: '0.08em', 
            color: 'var(--brand-primary)',
            marginBottom: 'var(--space-3)',
            textTransform: 'uppercase'
          }}>
            MORE TO COME
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            letterSpacing: '-0.02em',
            margin: '0 0 var(--space-4) 0' 
          }}>
            More worlds are being built.
          </h2>
          <p style={{ 
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            margin: '0 0 var(--space-8) 0'
          }}>
            See what we're working on.
          </p>
          <ButtonLink href="/games" variant="primary" size="large">
            Explore our games →
          </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
