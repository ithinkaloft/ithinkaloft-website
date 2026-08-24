import type { Game } from '../../types/game';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import './GameHighlights.css';

interface GameHighlightsProps {
  game: Game;
}

export default function GameHighlights({ game }: GameHighlightsProps) {
  if (!game.highlights || game.highlights.length === 0) {
    return null;
  }

  return (
    <section className="game-highlights">
      <Container>
        <Reveal delay={0}>
          <div className="game-highlights-header">
            <span className="game-highlights-eyebrow" aria-hidden="true">
              CORE EXPERIENCE
            </span>
            <h2 className="game-highlights-title">
              What defines <span>{game.title}</span>.
            </h2>
          </div>
        </Reveal>

        <div className="game-highlights-grid">
          {game.highlights.map((highlight, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="game-highlight-item">
                <div className="game-highlight-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="game-highlight-name">
                  {highlight.title}
                </h3>
                <p className="game-highlight-desc">
                  {highlight.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
