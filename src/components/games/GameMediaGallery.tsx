import type { Game } from '../../types/game';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import './GameMediaGallery.css';

interface GameMediaGalleryProps {
  game: Game;
}

export default function GameMediaGallery({ game }: GameMediaGalleryProps) {
  // Gracefully omit section if there's no authentic media
  if (!game.media.screenshots || game.media.screenshots.length === 0) {
    return null;
  }

  return (
    <section className="game-media-gallery">
      <Container>
        <div className="game-media-gallery-header">
          <span className="game-media-gallery-eyebrow" aria-hidden="true">
            GAMEPLAY
          </span>
        </div>

        <div className="game-media-gallery-grid">
          {game.media.screenshots.map((screenshot, idx) => {
            const isLandscape = screenshot.width > screenshot.height;
            return (
              <Reveal key={idx} delay={idx * 60}>
                <div 
                  className={`game-media-gallery-item ${isLandscape ? 'is-landscape' : 'is-portrait'}`}
                  style={{ aspectRatio: `${screenshot.width} / ${screenshot.height}` }}
                >
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    loading="lazy"
                    decoding="async"
                    className="game-media-gallery-image"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
