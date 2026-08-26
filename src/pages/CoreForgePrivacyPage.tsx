import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';
import './PrivacyPage.css'; // Reusing the generic privacy page styling

export default function CoreForgePrivacyPage() {
  return (
    <main className="page-privacy">
      <PageMeta 
        title="CORE FORGE Privacy Policy | I Think Aloft" 
        description="Privacy policy and data handling information for CORE FORGE by I Think Aloft." 
        path="/privacy/core-forge" 
      />
      
      <Container>
        <article className="privacy-article">
          <header className="privacy-header">
            <span className="privacy-eyebrow" aria-hidden="true">
              GAME PRIVACY
            </span>
            <h1 className="privacy-title">
              CORE FORGE Privacy Policy
            </h1>
            <p className="privacy-date">
              Last updated: August 26, 2026
            </p>
          </header>

          <div className="privacy-content">
            <section>
              <p>
                I Think Aloft (“we”, “our”, or “us”) develops and publishes CORE FORGE.<br />
                This Privacy Policy explains how information is handled when you use CORE FORGE.
              </p>
            </section>

            <section>
              <h2>Information We Handle</h2>
              <p>
                CORE FORGE does not require you to create an account or provide your name, email address, phone number, or other profile information in order to play.
              </p>
              <p>
                Game progress, settings, unlocks, and similar gameplay information are primarily stored locally on your device.
              </p>
              <p>
                CORE FORGE uses third-party advertising services that may automatically collect certain device and usage information as described below.
              </p>
            </section>

            <section>
              <h2>Advertising and Google AdMob</h2>
              <p>
                CORE FORGE uses Google AdMob / Google Mobile Ads to provide advertisements, including rewarded ads and interstitial ads.
              </p>
              <p>Google and its advertising partners may process information such as:</p>
              <ul>
                <li>IP address, which may be used to estimate general location</li>
                <li>Device and advertising identifiers</li>
                <li>App interactions, such as launches, taps, and ad interactions</li>
                <li>Advertising information</li>
                <li>Diagnostic and performance information, such as crash or performance data</li>
              </ul>
              <p>This information may be used for purposes including:</p>
              <ul>
                <li>Providing and displaying advertisements</li>
                <li>Measuring advertising performance</li>
                <li>Analytics</li>
                <li>Fraud prevention, security, and abuse detection</li>
                <li>Improving advertising services</li>
              </ul>
              <p>
                The exact information processed by Google may depend on your device, region, privacy choices, and Google advertising configuration.
              </p>
              <p>
                You can learn more about how Google handles information from apps that use its advertising services through Google's privacy and advertising documentation.
              </p>
            </section>

            <section>
              <h2>Rewarded Advertisements</h2>
              <p>
                CORE FORGE includes optional rewarded advertisements.<br />
                Players may choose to watch a rewarded advertisement in exchange for an in-game benefit, such as Forge Coins or a gameplay recovery opportunity.<br />
                Watching rewarded advertisements is optional.
              </p>
            </section>

            <section>
              <h2>Interstitial Advertisements</h2>
              <p>
                CORE FORGE may display interstitial advertisements at appropriate breaks between gameplay sessions or completed missions.<br />
                Interstitial advertisements are not intended to appear during active gameplay.
              </p>
            </section>

            <section>
              <h2>Personalized and Non-Personalized Advertising</h2>
              <p>
                Depending on your location, device settings, age-related requirements, consent choices, and applicable law, advertisements may be personalized or non-personalized.
              </p>
              <p>
                Where required, Google or CORE FORGE may request consent or apply restricted advertising behavior before serving certain advertisements.
              </p>
              <p>
                You may also be able to control or reset advertising personalization through your Android or Google account privacy settings.
              </p>
            </section>

            <section>
              <h2>Data Stored on Your Device</h2>
              <p>
                CORE FORGE stores gameplay-related information locally on your device, which may include:
              </p>
              <ul>
                <li>Game progress</li>
                <li>Mission completion</li>
                <li>Unlocks</li>
                <li>In-game currency balances</li>
                <li>Settings and preferences</li>
              </ul>
              <p>
                CORE FORGE does not currently provide user accounts or cloud-based player profiles.
              </p>
              <p>
                You can remove locally stored CORE FORGE data through your Android device's app-storage controls or by uninstalling the app.
              </p>
            </section>

            <section>
              <h2>Data Sharing</h2>
              <p>
                I Think Aloft does not sell personal information directly.
              </p>
              <p>
                Information processed through third-party services such as Google AdMob may be transmitted to and processed by Google and its advertising partners according to their own policies and applicable privacy requirements.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We take reasonable measures to limit the information handled directly by CORE FORGE.
              </p>
              <p>
                Information transmitted by third-party services is handled according to the security practices of those providers. Google states that data collected by the Google Mobile Ads SDK is encrypted in transit.
              </p>
              <p>
                No method of electronic storage or transmission can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2>Data Retention and Deletion</h2>
              <p>
                Gameplay data stored locally on your device remains there until it is cleared, overwritten, or the app is uninstalled.
              </p>
              <p>
                Because CORE FORGE currently does not provide user accounts or maintain a developer-operated cloud player database, there is generally no account-associated CORE FORGE gameplay profile stored by I Think Aloft to delete.
              </p>
              <p>
                Information processed by Google or other advertising providers is subject to their respective retention and deletion practices.
              </p>
              <p>
                If you have a privacy-related request or believe we hold information relating to you, you may contact us using the method provided below.
              </p>
            </section>

            <section>
              <h2>Children's Privacy</h2>
              <p>
                CORE FORGE does not intentionally ask players to provide personal information directly through the game.
              </p>
              <p>
                Advertising and data-handling behavior may vary depending on applicable age, regional, consent, and Google Play requirements.
              </p>
              <p>
                We will configure the app and its advertising services in accordance with the audience selections and legal requirements applicable to the published version of CORE FORGE.
              </p>
            </section>

            <section>
              <h2>Third-Party Services</h2>
              <p>
                CORE FORGE currently uses:
              </p>
              <ul>
                <li>
                  <strong>Google AdMob / Google Mobile Ads</strong><br />
                  Used for rewarded and interstitial advertising.
                </li>
              </ul>
              <p>
                Third-party services operate under their own privacy policies and terms.
              </p>
            </section>

            <section>
              <h2>External Links</h2>
              <p>
                CORE FORGE may provide links that open external websites, such as this Privacy Policy or the I Think Aloft support page.
              </p>
              <p>
                We are not responsible for the privacy practices or content of third-party websites.
              </p>
            </section>

            <section>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy when CORE FORGE, our services, third-party SDKs, or legal requirements change.<br />
                When this policy is updated, the “Last updated” date at the top of this page will be revised.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                If you have questions, concerns, or requests relating to privacy or CORE FORGE, please contact I Think Aloft through:<br />
                <Link to="/contact" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>https://ithinkaloft.com/contact</Link>
              </p>
              <p style={{ marginTop: 'var(--space-6)' }}>
                <strong>Developer:</strong> I Think Aloft<br />
                <strong>Game:</strong> CORE FORGE
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
