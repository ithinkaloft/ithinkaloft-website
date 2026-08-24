import type { Game } from '../../../types/game';
import Container from '../../common/Container';
import Reveal from '../../common/Reveal';
import './PocketPuzzleArcadeExperience.css';

interface PocketPuzzleArcadeExperienceProps {
  game: Game;
}

export default function PocketPuzzleArcadeExperience({ game }: PocketPuzzleArcadeExperienceProps) {
  if (!game.modes || game.modes.length === 0) return null;

  return (
    <section className="ppa-experience">
      <Container>
        <div className="ppa-exp-header">
          <Reveal delay={0}>
            <span className="ppa-exp-eyebrow" aria-hidden="true">
              THE COLLECTION
            </span>
            <h2 className="ppa-exp-title">
              One arcade.<br aria-hidden="true" />
              Different ways to think.
            </h2>
          </Reveal>
        </div>

        <div className="ppa-exp-grid">
          {game.modes.map((mode, index) => (
            <Reveal key={mode.name} delay={60 + index * 80}>
              <div className="ppa-exp-tile">
                <div className="ppa-exp-tile-marker" aria-hidden="true">
                  <span className="ppa-exp-marker-dot"></span>
                  <span className="ppa-exp-marker-line"></span>
                </div>
                <h3 className="ppa-exp-mode-name">{mode.name}</h3>
                {mode.description && (
                  <p className="ppa-exp-mode-desc">{mode.description}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="ppa-exp-footer">
            <p>
              Each puzzle keeps its own rules. The arcade keeps the experience connected.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
