import type { Game } from '../../types/game';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import './GameOverview.css';

interface GameOverviewProps {
  game: Game;
}

export default function GameOverview({ game }: GameOverviewProps) {
  return (
    <section className="game-overview">
      <Container>
        <Reveal delay={0}>
          <div className="game-overview-grid">
            
            {/* Identity / Hook Column */}
            <div className="game-overview-identity">
              <span className="game-overview-eyebrow" aria-hidden="true">
                About the game <span className="game-overview-rule"></span>
              </span>
              <h2 className="game-overview-heading">
                {game.overview.heading.split('. ').map((part, i, arr) => (
                  <span key={i}>
                    {part}{i < arr.length - 1 ? '. ' : ''}
                    <br aria-hidden="true" />
                  </span>
                ))}
              </h2>
            </div>
            
            {/* Description Column */}
            <div className="game-overview-content">
              
              <div className="game-overview-body">
                {game.overview.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
}
