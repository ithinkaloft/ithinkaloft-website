import Container from '../../common/Container';
import './ContactHero.css';

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <Container>
        <div className="contact-hero-content">
          <span className="contact-hero-eyebrow" aria-hidden="true">
            CONTACT
          </span>
          <h1 className="contact-hero-title">
            Let’s talk.
          </h1>
          <p className="contact-hero-desc">
            Questions, feedback, business enquiries, or game support — choose the right contact route below.
          </p>
        </div>
      </Container>
    </section>
  );
}
