import { Link } from 'react-router-dom';
import type { Game } from '../../types/game';
import { GameThemeScope } from './GameThemeScope';
import StatusBadge from '../common/StatusBadge';
import GameMediaFallback from './GameMediaFallback';
import './GameCard.css';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const mediaSrc = game.media.thumbnail?.src || game.media.hero?.src;

  return (
    <GameThemeScope theme={game.theme}>
      <Link to={`/games/${game.slug}`} className="game-card" aria-label={`Explore ${game.title}`}>
        {/* Media / Visual */}
        <div className="game-card-media">
          {mediaSrc ? (
            <img 
              src={mediaSrc} 
              alt="" 
              className="game-card-image" 
            />
          ) : (
            <GameMediaFallback title={game.title} />
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
