import Container from '../../common/Container';
import Reveal from '../../common/Reveal';
import './StudioStory.css';

export default function StudioStory() {
  return (
    <section className="studio-story">
      <Container>
        <div className="studio-story-grid">
          
          <div className="studio-story-heading-col">
            <Reveal delay={0}>
              <span className="studio-story-eyebrow" aria-hidden="true">
                WHY ITHINKALOFT
              </span>
              <h2 className="studio-story-title">
                Ideas deserve the effort to become something real.
              </h2>
            </Reveal>
          </div>
          
          <div className="studio-story-copy-col">
            <Reveal delay={0}>
              <div className="studio-story-paragraphs">
                <p>
                  ithinkaloft was created around a simple belief: a game doesn't need the resources of a massive studio to deserve care, personality, and polish.
                </p>
                <p>
                  We start with the experience itself—how it feels to play, what makes it distinct, and what gives someone a reason to keep going.
                </p>
                <p>
                  Different projects can lead to completely different worlds. What connects them is the standard behind them.
                </p>
              </div>
            </Reveal>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
