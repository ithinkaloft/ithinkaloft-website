import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';
import './PrivacyPage.css';

export default function PrivacyPage() {
  return (
    <main className="page-privacy">
      <PageMeta 
        title="Privacy | ithinkaloft" 
        description="Read the ithinkaloft privacy policy for information about how this website handles data and third-party links." 
        path="/privacy" 
      />
      
      <Container>
        <article className="privacy-article">
          <header className="privacy-header">
            <span className="privacy-eyebrow" aria-hidden="true">
              PRIVACY
            </span>
            <h1 className="privacy-title">
              Privacy Policy
            </h1>
            <p className="privacy-date">
              Last updated: 24 August 2026
            </p>
          </header>

          <div className="privacy-content">
            <section>
              <h2>1. About this website</h2>
              <p>
                This privacy policy applies to the ithinkaloft studio website (ithinkaloft.com). 
                Please note that individual games developed by ithinkaloft (such as CORE FORGE or Pocket Puzzle Arcade) 
                may have their own separate privacy policies describing data practices specific to those products, 
                including analytics, save data, or third-party SDKs.
              </p>
            </section>

            <section>
              <h2>2. Information we collect</h2>
              <p>
                This website is primarily informational. We do not currently create user accounts, host comment sections, 
                or collect personal information through embedded forms.
              </p>
            </section>

            <section>
              <h2>3. Analytics and cookies</h2>
              <p>
                At this time, we do not use third-party analytics trackers, marketing pixels, or invasive cookies 
                on this website. If this changes in the future to help us understand website traffic, this policy 
                will be updated to reflect exactly what is being used.
              </p>
            </section>

            <section>
              <h2>4. Contacting us</h2>
              <p>
                When you contact us via email using the addresses provided on our Contact page, we receive your email 
                address and any information you choose to include in your message. We use this information solely to 
                respond to your enquiry, provide game support, or address your feedback.
              </p>
            </section>

            <section>
              <h2>5. Third-party links</h2>
              <p>
                This website contains links to external services, such as the Google Play Store or other platforms 
                where our games are distributed. Once you leave this website, any information you provide is governed 
                by the privacy policies of those third parties. We are not responsible for the privacy practices of 
                other sites or storefronts.
              </p>
            </section>

            <section>
              <h2>6. Children's privacy</h2>
              <p>
                This studio website is intended for a general audience. We do not knowingly collect personal information 
                from children under 13 directly through this website.
              </p>
            </section>

            <section>
              <h2>7. Data retention</h2>
              <p>
                Any communication data (such as support emails) is retained only for as long as necessary to fulfill the 
                purposes outlined in this policy, resolve disputes, or comply with legal obligations.
              </p>
            </section>

            <section>
              <h2>8. Changes to this policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices, new website 
                features, or legal requirements. When we do, we will revise the "Last updated" date at the top of this page.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
