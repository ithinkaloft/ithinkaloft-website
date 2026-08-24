import type { Game } from '../../types/game';
import Container from '../common/Container';
import { GameThemeScope } from '../games/GameThemeScope';
import { ButtonLink } from '../common/Button';
import StatusBadge from '../common/StatusBadge';
import Reveal from '../common/Reveal';
import './FeaturedGame.css';

interface FeaturedGameProps {
  game: Game;
}

export default function FeaturedGame({ game }: FeaturedGameProps) {
  return (
    <GameThemeScope theme={game.theme}>
      <section className="featured-game">
        <Container className="featured-layout">
          
          {/* Media / Art Side */}
          <Reveal delay={0} className="featured-media-wrapper">
            {/* Background motif container */}
            <div className="featured-decoration" aria-hidden="true">
              <svg viewBox="0 0 400 400" fill="none" style={{ width: '100%', height: '100%' }}>
                <path 
                  className="arc-rotate"
                  d="M 200 50 A 150 150 0 0 1 350 200" 
                  stroke="var(--game-accent)" 
                  strokeWidth="1" 
                  strokeOpacity="0.2"
                  strokeDasharray="4 8"
                />
                <circle 
                  cx="200" cy="200" r="130" 
                  stroke="var(--game-accent)" 
                  strokeWidth="1" 
                  strokeOpacity="0.05"
                />
              </svg>
            </div>

            {game.media.hero ? (
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <img 
                  src={game.media.hero} 
                  alt={`${game.title} gameplay showcasing ${game.shortDescription}`} 
                  className="featured-media-image"
                />
                <div className="featured-media-overlay" />
              </div>
            ) : (
              <div className="featured-media-placeholder">
                <div className="featured-media-placeholder-text">
                  <span className="featured-media-placeholder-title">{game.title}</span>
                  VISUAL PREVIEW
                </div>
              </div>
            )}
          </Reveal>

          {/* Copy Side */}
          <Reveal delay={80} className="featured-content">
            <span className="featured-eyebrow">
              Featured Game
            </span>
            <h2 className="featured-title">
              {game.title}
            </h2>
            <div className="featured-status">
              <StatusBadge status={game.status} />
            </div>
            
            <p className="featured-tagline">
              {game.tagline}
            </p>
            <p className="featured-description">
              {game.shortDescription}
            </p>
            
            <div>
              <ButtonLink href={`/games/${game.slug}`} variant="primary" size="large">
                Explore {game.title} →
              </ButtonLink>
            </div>
          </Reveal>

        </Container>
      </section>
    </GameThemeScope>
  );
}
