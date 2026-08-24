import Container from '../../common/Container';
import Reveal from '../../common/Reveal';
import './StudioPrinciples.css';

const PRINCIPLES = [
  {
    title: 'Gameplay First',
    description: 'A game has to feel good before decoration can make it look good.'
  },
  {
    title: 'Identity Matters',
    description: 'Every game should have a reason to exist beyond being another version of something familiar.'
  },
  {
    title: 'Polish Is Part of the Game',
    description: "Motion, sound, feedback, and readability aren't finishing touches. They're part of play."
  },
  {
    title: 'Keep Improving',
    description: 'Shipping matters, but so does listening, learning, and making the experience better.'
  }
];

export default function StudioPrinciples() {
  return (
    <section className="studio-principles">
      <Container>
        <div className="sp-grid">
          
          <div className="sp-heading-col">
            <div className="sp-heading-sticky">
              <Reveal delay={0}>
                <span className="sp-eyebrow" aria-hidden="true">
                  HOW WE BUILD
                </span>
                <h2 className="sp-title">
                  The standard behind<br aria-hidden="true" />
                  different worlds.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="sp-list-col">
            {PRINCIPLES.map((principle, index) => {
              const isLast = index === PRINCIPLES.length - 1;
              return (
                <Reveal key={principle.title} delay={index * 70}>
                  <div className={`sp-item ${isLast ? 'sp-item-last' : ''}`}>
                    <span className="sp-item-number" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <div className="sp-item-content">
                      <h3 className="sp-item-title">
                        {principle.title}
                      </h3>
                      <p className="sp-item-desc">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          
        </div>
      </Container>
    </section>
  );
}
