import type { Game } from '../../types/game';
import Container from '../common/Container';
import './GameAvailability.css';

interface GameAvailabilityProps {
  game: Game;
}

export default function GameAvailability({ game }: GameAvailabilityProps) {
  const { availability, status, store, title } = game;

  if (!availability) {
    return null;
  }

  const isAvailable = status === 'available';
  const hasPlayStore = Boolean(store?.googlePlay);

  return (
    <section className="game-availability">
      <Container>
        <div className="game-availability-panel">
          <span className="game-availability-eyebrow" aria-hidden="true">
            {availability.label || (isAvailable ? 'Available Now' : 'In Development')}
          </span>

            <h2 className="game-availability-title">
              {title}
            </h2>

            {availability.description && (
              <p className="game-availability-desc">
                {availability.description}
              </p>
            )}
            
            {availability.note && (
              <p className="game-availability-note">
                {availability.note}
              </p>
            )}

            {isAvailable && hasPlayStore && (
              <div className="game-availability-action">
                <a 
                  href={store!.googlePlay} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button"
                >
                  Get it on Google Play ↗
                </a>
              </div>
            )}
          </div>
      </Container>
    </section>
  );
}
