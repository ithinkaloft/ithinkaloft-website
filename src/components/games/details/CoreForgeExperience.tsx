import Container from '../../common/Container';
import Reveal from '../../common/Reveal';
import './CoreForgeExperience.css';

const LOOP_STEPS = [
  {
    title: 'Sort',
    description: 'Solve the chamber and complete the puzzle.',
  },
  {
    title: 'Power',
    description: 'Convert solved chambers into combat energy.',
  },
  {
    title: 'Fight',
    description: 'Spend that energy through your weapon systems.',
  },
  {
    title: 'Survive',
    description: 'Adapt your build as enemies and sectors escalate.',
  }
];

export default function CoreForgeExperience() {
  return (
    <section className="core-forge-experience">
      <Container>
        <div className="cf-exp-header">
          <Reveal delay={0}>
            <span className="cf-exp-eyebrow" aria-hidden="true">
              THE CORE LOOP
            </span>
            <h2 className="cf-exp-title">
              Puzzle input becomes combat power.
            </h2>
          </Reveal>
        </div>

        <div className="cf-exp-flow">
          {LOOP_STEPS.map((step, index) => (
            <div key={step.title} className="cf-exp-step-wrapper">
              <Reveal delay={100 + index * 100}>
                <div className="cf-exp-step">
                  <div className="cf-exp-node">
                    <span className="cf-exp-number" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <h3 className="cf-exp-step-title">{step.title}</h3>
                  </div>
                  <p className="cf-exp-step-desc">{step.description}</p>
                </div>
              </Reveal>
              
              {/* Connector line for all but the last step */}
              {index < LOOP_STEPS.length - 1 && (
                <Reveal delay={150 + index * 100}>
                  <div className="cf-exp-connector" aria-hidden="true">
                    <span className="cf-exp-arrow"></span>
                  </div>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
