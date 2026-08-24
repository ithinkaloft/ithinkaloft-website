import type { Game, GameMediaImage } from '../../types/game';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import './GameMediaGallery.css';

interface GameMediaGalleryProps {
  game: Game;
}

export default function GameMediaGallery({ game }: GameMediaGalleryProps) {
  if (!game.media.screenshots || game.media.screenshots.length === 0) {
    return null;
  }

  // Group screenshots by category
  const groups: Record<string, GameMediaImage[]> = {};
  game.media.screenshots.forEach(screenshot => {
    const cat = screenshot.category || 'GAMEPLAY';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(screenshot);
  });

  return (
    <section className="game-media-gallery">
      <Container>
        {Object.entries(groups).map(([category, items]) => (
          <div key={category} className="game-media-gallery-group">
            <div className="game-media-gallery-header">
              <span className="game-media-gallery-eyebrow" aria-hidden="true">
                {category.toUpperCase()}
              </span>
            </div>

            <div className={`game-media-gallery-grid${items.every(s => (s.height || 1) > (s.width || 1)) ? ' has-portrait-dominant' : ''}`}>
              {items.map((screenshot, idx) => {
                const w = screenshot.width || 1;
                const h = screenshot.height || 1;
                const isLandscape = w > h;
                return (
                  <Reveal key={idx} delay={idx * 60}>
                    <div 
                      className={`game-media-gallery-item ${isLandscape ? 'is-landscape' : 'is-portrait'}`}
                      style={{ aspectRatio: `${w} / ${h}` }}
                    >
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.alt}
                        width={w}
                        height={h}
                        loading="lazy"
                        decoding="async"
                        className="game-media-gallery-image"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
