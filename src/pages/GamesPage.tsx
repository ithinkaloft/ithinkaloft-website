import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';
import Section from '../components/common/Section';
import Reveal from '../components/common/Reveal';
import GameCard from '../components/games/GameCard';
import { games } from '../data/games';
import '../components/sections/GamesPreview.css'; // Reusing the grid layout CSS

export default function GamesPage() {
  return (
    <>
      <PageMeta 
        title="Games"
        description="Games built with care, each with a world of its own. Explore the ithinkaloft catalogue."
        path="/games"
      />
      <Section spacing="large" style={{ paddingTop: 'clamp(6rem, 15vw, 10rem)' }}>
        <Container>
          <Reveal delay={0}>
            <header style={{ marginBottom: 'var(--space-12)' }}>
              <span style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                color: 'var(--brand-primary)',
                marginBottom: 'var(--space-4)',
                textTransform: 'uppercase'
              }}>
                Our Games
              </span>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: '0 0 var(--space-4) 0',
                color: 'var(--text-primary)',
                maxWidth: '45rem'
              }}>
                Games built with care, each with a world of its own.
              </h1>
            </header>
          </Reveal>

          <div className="games-preview-grid">
            {games.map((game, idx) => (
              <Reveal key={game.slug} delay={80 * idx}>
                <GameCard game={game} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
