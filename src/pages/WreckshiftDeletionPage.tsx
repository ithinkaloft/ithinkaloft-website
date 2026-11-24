import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';
import { siteConfig } from '../data/site';
import './PrivacyPage.css';

export default function WreckshiftDeletionPage() {
  const email = siteConfig.contact.support;
  const requestLink = 'mailto:' + email + '?subject=' + encodeURIComponent('WRECKSHIFT data deletion request') + '&body=' + encodeURIComponent('Please delete my WRECKSHIFT online leaderboard data.\n\nGoogle Play Games display name:\nBoards I appear on (Endless / Showdown):\nApproximate last played date:\n');
  return (
    <main className="page-privacy">
      <PageMeta title="WRECKSHIFT Data Deletion | I Think Aloft" description="Request deletion of your WRECKSHIFT online leaderboard data from I Think Aloft." path="/privacy/wreckshift/delete-data" />
      <Container>
        <article className="privacy-article">
          <header className="privacy-header">
            <span className="privacy-eyebrow">GAME PRIVACY</span>
            <h1 className="privacy-title">WRECKSHIFT Data Deletion</h1>
            <p className="privacy-date">I Think Aloft · Updated November 24, 2026</p>
          </header>
          <div className="privacy-content">
            <section>
              <h2>Request deletion of online data</h2>
              <p>You can ask us to delete your WRECKSHIFT online leaderboard data without reinstalling the game or signing in to this website.</p>
              <ol>
                <li>Email <a href={requestLink}>{email}</a> with the subject <strong>WRECKSHIFT data deletion request</strong>.</li>
                <li>Include your Google Play Games display name, the boards you appear on (Endless, Showdown) and an approximate last-played date. A screenshot of your leaderboard entry helps us find it.</li>
                <li>We will reply if we need more information to identify your record, and confirm when deletion is complete. Do not send passwords, payment details or identity documents.</li>
              </ol>
              <p><a className="button" href={requestLink}>Email a deletion request</a></p>
              <p>If the button does not open an email app, copy the address above into your email service.</p>
            </section>
            <section>
              <h2>Data covered by your request</h2>
              <p>We delete the online records we can identify as yours: your Endless and Showdown leaderboard entries on the daily, weekly and all-time boards, and the associated Firebase authentication record. These records contain your Firebase and Play Games player identifiers, display name, profile picture link, scores, the car used and timestamps.</p>
              <p>Deleting online records does not remove progress stored on your device. To remove local progress, Scrap, cars and settings, use Android Settings → Apps → WRECKSHIFT → Storage → Clear data. This resets the game.</p>
              <p>If you sign in with Play Games and play again after deletion, new leaderboard entries will be created. To avoid this, sign out of Play Games for WRECKSHIFT or do not sign in.</p>
            </section>
            <section>
              <h2>Timing and retention</h2>
              <p>We complete deletion within 30 days after identifying your records and confirm by email. We keep the request email only while handling it, then delete it.</p>
              <p>Your Google account, Google Play Games profile and advertising-provider records are managed by Google and are not deleted by this request. See the provider links in our <Link to="/privacy/wreckshift">privacy policy</Link>.</p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
