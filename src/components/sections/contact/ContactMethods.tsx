import { siteConfig } from '../../../data/site';
import Container from '../../common/Container';
import './ContactMethods.css';

export default function ContactMethods() {
  const { general, support } = siteConfig.contact;

  return (
    <section className="contact-methods">
      <Container>
        <div className="contact-methods-grid">
          
          <div className="contact-method-block">
            <span className="contact-method-eyebrow" aria-hidden="true">
              GENERAL / BUSINESS
            </span>
            <div className="contact-method-body">
              <p>
                For partnerships, studio enquiries, collaborations, or anything that doesn’t belong to a specific game.
              </p>
              {general ? (
                <a href={`mailto:${general}`} className="button contact-method-action">
                  EMAIL US ↗
                </a>
              ) : (
                <button className="button contact-method-action" disabled>
                  Email coming soon
                </button>
              )}
            </div>
          </div>

          <div className="contact-method-block">
            <span className="contact-method-eyebrow" aria-hidden="true">
              GAME SUPPORT
            </span>
            <div className="contact-method-body">
              <p>
                Need help with a game or want to report a problem? Contact support and include the game name, device, and a short description of the issue.
              </p>
              
              <div className="contact-method-guidance">
                <p>Please include:</p>
                <ul>
                  <li>Game name</li>
                  <li>Device / model</li>
                  <li>Android version if known</li>
                  <li>What happened & what you expected</li>
                </ul>
              </div>
              
              {support ? (
                <a href={`mailto:${support}`} className="button contact-method-action">
                  CONTACT SUPPORT ↗
                </a>
              ) : (
                <button className="button contact-method-action" disabled>
                  Email coming soon
                </button>
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
