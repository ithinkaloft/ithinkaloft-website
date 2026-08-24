import type { Game } from '../../../types/game';
import Container from '../../common/Container';
import Reveal from '../../common/Reveal';
import GameCard from '../../games/GameCard';
import './AboutGames.css';

interface AboutGamesProps {
  games: Game[];
}

export default function AboutGames({ games }: AboutGamesProps) {
  return (
    <section className="about-games">
      <Container>
        <div className="about-games-header">
          <Reveal delay={0}>
            <span className="about-games-eyebrow" aria-hidden="true">
              OUR GAMES
            </span>
            <h2 className="about-games-title">
              Different worlds.<br aria-hidden="true" />
              Built with the same care.
            </h2>
            <p className="about-games-desc">
              CORE FORGE and Pocket Puzzle Arcade take very different forms, but both are shaped by the same focus on feel, identity, and polish.
            </p>
          </Reveal>
        </div>

        <div className="about-games-grid">
          {games.map((game, index) => (
            <Reveal key={game.slug} delay={100 + index * 100}>
              <GameCard game={game} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
