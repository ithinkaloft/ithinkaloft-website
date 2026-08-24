import Container from '../../common/Container';
import Reveal from '../../common/Reveal';
import './StudioPhilosophy.css';

export default function StudioPhilosophy() {
  return (
    <section className="studio-philosophy">
      <Container>
        <Reveal>
          <div className="studio-philosophy-content">
            <h2 className="studio-philosophy-statement">
              You're only as good as your last game.<br />
              <span className="studio-philosophy-highlight">So the next one has to be better.</span>
            </h2>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
