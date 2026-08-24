import { games } from '../../data/games';
import type { Game } from '../../types/game';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import GameCard from './GameCard';
import './MoreGames.css';

interface MoreGamesProps {
  currentGame: Game;
}

export default function MoreGames({ currentGame }: MoreGamesProps) {
  // Find other games, excluding the current one
  const otherGames = games
    .filter(g => g.slug !== currentGame.slug)
    .slice(0, 3); // Cap at 3 for a balanced layout

  if (otherGames.length === 0) {
    return null;
  }

  return (
    <section className="more-games">
      <Container>
        <div className="more-games-header">
          <span className="more-games-eyebrow" aria-hidden="true">
            MORE FROM ITHINKALOFT
          </span>
          <h2 className="more-games-title">
            Explore another world.
          </h2>
        </div>

        <div className="more-games-grid">
          {otherGames.map((game, index) => (
            <Reveal key={game.slug} delay={index * 80}>
              <GameCard game={game} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
