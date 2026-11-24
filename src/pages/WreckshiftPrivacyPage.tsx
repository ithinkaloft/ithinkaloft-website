import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';
import { siteConfig } from '../data/site';
import './PrivacyPage.css';

export default function WreckshiftPrivacyPage() {
  const email = siteConfig.contact.support;
  return (
    <main className="page-privacy">
      <PageMeta
        title="WRECKSHIFT Privacy Policy | I Think Aloft"
        description="Privacy policy and data handling information for WRECKSHIFT by I Think Aloft."
        path="/privacy/wreckshift"
      />
      <Container>
        <article className="privacy-article">
          <header className="privacy-header">
            <span className="privacy-eyebrow" aria-hidden="true">GAME PRIVACY</span>
            <h1 className="privacy-title">WRECKSHIFT Privacy Policy</h1>
            <p className="privacy-date">Last updated: November 24, 2026</p>
          </header>

          <div className="privacy-content">
            <section>
              <p>
                I Think Aloft (“we”, “our”, or “us”) develops and publishes WRECKSHIFT, a police-chase driving game for Android.
                This Privacy Policy explains what information the game handles, why, and the choices you have.
              </p>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Your progress, cars, Scrap and settings are stored on your device.</li>
                <li>If you sign in with Google Play Games, your Play Games display name, profile picture and scores are used for the online leaderboards, where other players can see them.</li>
                <li>The game shows ads through Google AdMob, which processes device and advertising information as described below.</li>
                <li>We do not use analytics in WRECKSHIFT, and we do not sell personal information.</li>
              </ul>
            </section>

            <section>
              <h2>Information stored on your device</h2>
              <p>WRECKSHIFT saves gameplay information locally on your device, including:</p>
              <ul>
                <li>Best scores and records (Endless, Showdown, peak Wanted level, best Wreck Chain)</li>
                <li>MISSIONS progress and stars</li>
                <li>Scrap balance, owned and rented cars, and paints</li>
                <li>Settings such as music and sound volume, controls, camera and graphics options</li>
              </ul>
              <p>
                This information stays on your device. You can remove it through Android Settings → Apps → WRECKSHIFT → Storage → Clear data, or by uninstalling the game.
              </p>
            </section>

            <section>
              <h2>Leaderboards (Google Play Games and Firebase)</h2>
              <p>
                WRECKSHIFT has online leaderboards for Endless and Showdown, with daily, weekly and all-time boards and a Friends view.
                To take part, the game signs you in with Google Play Games and then with Firebase Authentication. When you finish a run or
                match, the game stores a leaderboard entry in Google Cloud Firestore containing:
              </p>
              <ul>
                <li>A Firebase user identifier and your Google Play Games player identifier</li>
                <li>Your Google Play Games display name and profile picture link</li>
                <li>Your score, the car you used, and the time the entry was saved</li>
              </ul>
              <p>
                Leaderboard entries, including your display name, profile picture and score, are visible to other players of WRECKSHIFT.
                The Friends view uses your Google Play Games friends list, only if you allow friends access in Play Games; the list is read on your
                device to show which friends have scores and is not stored by us.
              </p>
              <p>
                Leaderboards are optional. If you do not sign in to Play Games, the game works offline and no leaderboard entry is created.
                Play Games sign-in and your Play Games profile are managed by Google; you can change your display name, picture and friends
                settings in the Google Play Games app.
              </p>
            </section>

            <section>
              <h2>Local Wi-Fi multiplayer</h2>
              <p>
                Multiplayer Showdown connects phones on the same Wi-Fi network directly. Game data such as car positions, the selected car and
                a player name is exchanged between the phones in the match only. It is not sent to us or stored online.
              </p>
            </section>

            <section>
              <h2>Advertising (Google AdMob)</h2>
              <p>
                WRECKSHIFT uses Google AdMob / Google Mobile Ads to show optional rewarded ads (for example a second chance in Endless, or
                extra Scrap after a run) and interstitial ads between runs. Ads are not shown during active gameplay.
              </p>
              <p>Google and its advertising partners may process information such as:</p>
              <ul>
                <li>IP address, which may be used to estimate general location</li>
                <li>Device and advertising identifiers</li>
                <li>App and ad interactions</li>
                <li>Diagnostic information related to the ads service</li>
              </ul>
              <p>
                This information may be used to show and measure ads, prevent fraud and improve Google's services. Depending on your region,
                device settings and consent choices, ads may be personalized or non-personalized. Where required, the game asks for your
                consent before ads are personalized, and you can change your choice later. You can also reset or limit ad personalization in
                your Android or Google account settings. See <a href="https://policies.google.com/technologies/partner-sites">How Google uses information from sites or apps that use its services</a>.
              </p>
            </section>

            <section>
              <h2>No analytics</h2>
              <p>
                WRECKSHIFT does not use analytics. The Firebase software included for leaderboard sign-in contains an analytics component;
                it is switched off in the game, so it does not collect usage data.
              </p>
            </section>

            <section>
              <h2>Sharing and selling</h2>
              <p>
                We do not sell personal information. Information is shared only with the service providers described here (Google Play Games,
                Firebase and Google AdMob) so they can provide their services, and leaderboard entries are visible to other players.
              </p>
            </section>

            <section>
              <h2>Security</h2>
              <p>
                Information sent to Google Play Games, Firebase and AdMob is encrypted in transit. Leaderboard data is protected by Firebase
                security rules that only allow a signed-in player to write their own entry. No method of storage or transmission is completely secure.
              </p>
            </section>

            <section>
              <h2>Retention and deletion</h2>
              <p>
                Leaderboard entries are kept while the leaderboards run, so that all-time records remain meaningful. You can ask us to delete
                your online leaderboard data at any time: follow the steps on the <Link to="/privacy/wreckshift/delete-data">WRECKSHIFT data-deletion page</Link>.
                Clearing the app's data or uninstalling the game removes local progress but does not delete online leaderboard entries.
              </p>
              <p>Information processed by Google services follows Google's own retention practices.</p>
            </section>

            <section>
              <h2>Children</h2>
              <p>
                WRECKSHIFT is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a
                child has created a leaderboard entry, contact us and we will delete it.
              </p>
            </section>

            <section>
              <h2>Third-party services</h2>
              <ul>
                <li><strong>Google Play Games Services</strong>: sign-in, display name, profile picture, friends list. <a href="https://policies.google.com/privacy">Google Privacy Policy</a></li>
                <li><strong>Firebase Authentication and Cloud Firestore</strong>: leaderboard sign-in and storage. <a href="https://firebase.google.com/support/privacy">Firebase privacy</a></li>
                <li><strong>Google AdMob / Google Mobile Ads</strong>: rewarded and interstitial ads. <a href="https://policies.google.com/technologies/ads">Google advertising</a></li>
              </ul>
            </section>

            <section>
              <h2>Changes to this policy</h2>
              <p>
                We may update this policy when WRECKSHIFT, the services it uses, or legal requirements change. The “Last updated” date above shows
                the latest version; important changes will also be noted in the game or its store listing.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>Read the <Link to="/terms/wreckshift">WRECKSHIFT Terms &amp; Conditions</Link> for the rules of using the game.</p>
              <p>
                For privacy questions or requests, email <a href={'mailto:' + email}>{email}</a> or use <Link to="/contact">ithinkaloft.com/contact</Link>.
              </p>
              <p style={{ marginTop: 'var(--space-6)' }}>
                <strong>Developer:</strong> I Think Aloft<br />
                <strong>Game:</strong> WRECKSHIFT
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
