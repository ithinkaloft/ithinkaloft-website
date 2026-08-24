import { Link } from 'react-router-dom';
import type { Game } from '../../types/game';
import { GameThemeScope } from './GameThemeScope';
import StatusBadge from '../common/StatusBadge';
import './GameCard.css';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <GameThemeScope theme={game.theme}>
      <Link to={`/games/${game.slug}`} className="game-card" aria-label={`Explore ${game.title}`}>
        {/* Media / Visual */}
        <div className="game-card-media">
          {game.media.thumbnail || game.media.hero ? (
            <img 
              src={game.media.thumbnail || game.media.hero} 
              alt="" 
              className="game-card-image" 
            />
          ) : (
            <div className="game-card-fallback">
              <span className="game-card-fallback-text">
                <span style={{ display: 'block', fontSize: '1rem', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
                  {game.title}
                </span>
                VISUAL PREVIEW
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="game-card-content">
          <h3 className="game-card-title">{game.title}</h3>
          
          <div className="game-card-status">
            <StatusBadge status={game.status} />
          </div>
          
          <p className="game-card-tagline">{game.tagline}</p>
          
          <div className="game-card-action">
            Explore game <span className="game-card-arrow" aria-hidden="true">→</span>
          </div>
        </div>
      </Link>
    </GameThemeScope>
  );
}
