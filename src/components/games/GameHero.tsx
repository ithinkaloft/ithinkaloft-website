import { Link } from 'react-router-dom';
import type { Game } from '../../types/game';
import Container from '../common/Container';
import StatusBadge from '../common/StatusBadge';
import Reveal from '../common/Reveal';
import GameMediaFallback from './GameMediaFallback';
import './GameHero.css';

interface GameHeroProps {
  game: Game;
}

export default function GameHero({ game }: GameHeroProps) {
  const mediaSrc = game.media.hero?.src || game.media.thumbnail?.src;

  return (
    <section className="game-hero">
      <Container>
        <div className="game-hero-grid">
          
          {/* Identity & Content Column */}
          <div className="game-hero-content">
            <Reveal delay={0}>
              <div className="game-hero-top-nav">
                <Link to="/games" className="game-hero-back">
                  ← All Games
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="game-hero-status">
                <StatusBadge status={game.status} />
              </div>

              <h1 className="game-hero-title">
                {game.title}
              </h1>
              
              <p className="game-hero-tagline">
                {game.tagline}
              </p>

              <p className="game-hero-short-desc">
                {game.shortDescription}
              </p>

              <ul className="game-hero-meta" aria-label="Game details">
                {game.platforms.map(platform => (
                  <li key={platform.name}>{platform.name}</li>
                ))}
                {game.genre && <li>{game.genre}</li>}
              </ul>

              {/* Primary Action (Only if real) */}
              {game.status === 'available' && game.store?.googlePlay && (
                <div className="game-hero-action">
                  <a 
                    href={game.store.googlePlay} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Get it on Google Play ↗
                  </a>
                </div>
              )}
            </Reveal>
          </div>

          {/* Media Column */}
          <div className="game-hero-media-wrapper">
            <Reveal delay={160}>
              <div className="game-hero-media">
                {mediaSrc ? (
                  <img src={mediaSrc} alt={`${game.title} hero artwork`} className="game-hero-image" />
                ) : (
                  <GameMediaFallback title={game.title} />
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
