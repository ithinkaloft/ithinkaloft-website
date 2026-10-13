import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';
import { siteConfig } from '../data/site';
import './PrivacyPage.css';

export default function SortingWarDeletionPage() {
  const email = siteConfig.contact.support;
  const requestLink = 'mailto:' + email + '?subject=' + encodeURIComponent('Sorting War data deletion request') + '&body=' + encodeURIComponent('Please delete my Sorting War online data.\n\nPlayer display name:\nPlayer ID (if available):\nModes played (Daily / Gauntlet / Ranked):\nApproximate last played date:\n');
  return (
    <main className="page-privacy">
      <PageMeta title="Sorting War Data Deletion | I Think Aloft" description="Request deletion of your Sorting War online player data from I Think Aloft." path="/privacy/sorting-war/delete-data" />
      <Container>
        <article className="privacy-article">
          <header className="privacy-header">
            <span className="privacy-eyebrow">GAME PRIVACY</span>
            <h1 className="privacy-title">Sorting War Data Deletion</h1>
            <p className="privacy-date">I Think Aloft ? Updated October 13, 2026</p>
          </header>
          <div className="privacy-content">
            <section>
              <h2>Request deletion of online data</h2>
              <p>You can request removal of your Sorting War online player data without reinstalling the game or signing in to this website.</p>
              <ol>
                <li>Email <a href={requestLink}>{email}</a> with the subject <strong>Sorting War data deletion request</strong>.</li>
                <li>Include your player display name, player ID if available, the modes you played, and an approximate last-played date. A leaderboard screenshot can help identify your record.</li>
                <li>We will reply if we need additional information to identify and verify your record, and confirm when deletion is complete. Do not send passwords, payment card details, or identity documents.</li>
              </ol>
              <p><a className="button" href={requestLink}>Email a deletion request</a></p>
              <p>If the button does not open an email app, copy the address above into your email service.</p>
            </section>
            <section>
              <h2>Data covered by your request</h2>
              <p>We remove the online records we can identify as yours: Daily and Gauntlet leaderboard entries; Ranked ghost profiles, ratings and play-style statistics; associated defense notes; and the associated anonymous Firebase authentication record. These records may include your player identifier, display name, selected hero, hero level, scores, trophies and timestamps.</p>
              <p>Deleting online records does not remove gameplay progress stored on your device. To remove local progress and settings, use Android Settings ? Apps ? Sorting War ? Storage ? Clear data. This resets local progress.</p>
              <p>After deletion, using online features again may create a new anonymous identifier and new records. Avoid posting new scores or playing Ranked if you do not want new online records created.</p>
            </section>
            <section>
              <h2>Timing and retention</h2>
              <p>We complete deletion within 30 days after identifying and verifying your records, and confirm completion by email. We do not intentionally retain deleted leaderboard or Ranked records in our active database for an additional period.</p>
              <p>We retain the deletion-request email and necessary correspondence while handling your request, then delete them when the request is completed. If a legal or fraud-prevention obligation requires retention of other information, we explain the affected data and retention period in our reply.</p>
              <p>Google Play purchase records, your Google or Play Games account, and advertising-provider records are managed by those providers. This request does not delete those accounts, cancel or refund purchases, or revoke ownership of Commander Pack. Provider backups and logs follow their own retention policies; see the linked provider policies in our <Link to="/privacy/sorting-war">privacy policy</Link>.</p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
