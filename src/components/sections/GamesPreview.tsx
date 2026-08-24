
import type { Game } from '../../types/game';
import Section from '../common/Section';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ButtonLink } from '../common/Button';
import GameCard from '../games/GameCard';
import Reveal from '../common/Reveal';
import './GamesPreview.css';

interface GamesPreviewProps {
  games: Game[];
}

export default function GamesPreview({ games }: GamesPreviewProps) {
  return (
    <Section id="games" spacing="large">
      <Container>
        <Reveal delay={0}>
          <SectionHeading 
            eyebrow="OUR GAMES"
            title="Different worlds. Same attention to detail."
            description="From intense sci-fi systems to approachable puzzle play, each game has its own identity while sharing the same focus on feel and polish."
          />
        </Reveal>
        
        <div className="games-preview-grid">
          {games.map((game, idx) => (
            <Reveal key={game.slug} delay={80 * idx}>
              <GameCard game={game} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div style={{ textAlign: 'center' }}>
            <ButtonLink href="/games" variant="secondary" size="large">
              View all games →
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
