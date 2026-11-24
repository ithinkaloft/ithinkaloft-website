import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';
import { siteConfig } from '../data/site';
import './PrivacyPage.css';

export default function WreckshiftTermsPage() {
  return (
    <main className="page-privacy">
      <PageMeta title="WRECKSHIFT Terms & Conditions | I Think Aloft" description="Terms for playing WRECKSHIFT and using its leaderboards, multiplayer and ads." path="/terms/wreckshift" />
      <Container>
        <article className="privacy-article">
          <header className="privacy-header">
            <span className="privacy-eyebrow">GAME TERMS</span>
            <h1 className="privacy-title">WRECKSHIFT Terms &amp; Conditions</h1>
            <p className="privacy-date">Last updated: November 24, 2026</p>
          </header>
          <div className="privacy-content">
            <section>
              <h2>About these terms</h2>
              <p>These terms describe your use of WRECKSHIFT, published by I Think Aloft. By playing, you agree to them. If you cannot agree, stop using the game. If you are not legally able to agree on your own, ask your parent or guardian to review them with you and give any permission required by applicable law.</p>
            </section>
            <section>
              <h2>Playing the game</h2>
              <p>You may install and play WRECKSHIFT for your personal, non-commercial entertainment. The game, its cars, arenas, artwork, music, sound, code and branding remain the property of I Think Aloft or their licensors; this permission does not transfer ownership.</p>
              <p>WRECKSHIFT is a fictional game. Its driving, crashes and police chases are for entertainment only and must never be copied on real roads.</p>
              <p>Do not use the game to break the law, impersonate others, interfere with its services, modify or hack the game, submit manipulated scores or exploit online systems.</p>
            </section>
            <section>
              <h2>Progress, Scrap and cars</h2>
              <p>Progress, Scrap, cars, paints and settings are saved on your device. Uninstalling, clearing app data or changing devices can remove them; they are not backed up online.</p>
              <p>Scrap, cars, rentals and other in-game items are part of the game experience. They have no cash value, cannot be exchanged for money, and cannot be transferred between players or devices through the game. We may rebalance prices, rewards and car performance in updates.</p>
            </section>
            <section>
              <h2>Leaderboards</h2>
              <p>Online leaderboards use Google Play Games sign-in and Firebase. Your Play Games display name, profile picture and scores are visible to other players, as described in our <Link to="/privacy/wreckshift">Privacy Policy</Link>. Choose a Play Games name and picture that are appropriate for others to see.</p>
              <p>We may remove scores that appear manipulated, impossible or obtained by exploiting bugs, and may restrict players who misuse online features. Leaderboard positions and records have no cash value and are not prizes.</p>
            </section>
            <section>
              <h2>Local Wi-Fi multiplayer</h2>
              <p>Multiplayer Showdown connects phones on the same Wi-Fi network. Only join or host games on networks and with people you trust. We are not responsible for the conduct of other players in a local match.</p>
            </section>
            <section>
              <h2>Advertisements</h2>
              <p>WRECKSHIFT is free and shows ads through Google AdMob: optional rewarded ads (for example a second chance or extra Scrap) and interstitial ads between runs. A rewarded benefit is given when the ad service confirms the ad was completed; an unavailable or incomplete ad may not give a reward.</p>
            </section>
            <section>
              <h2>Third-party services</h2>
              <p>Google Play, Google Play Games, Firebase and Google AdMob operate under their own terms and policies. You can <Link to="/privacy/wreckshift/delete-data">request deletion of your online leaderboard data</Link> at any time.</p>
            </section>
            <section>
              <h2>Updates, availability and your rights</h2>
              <p>We may release updates to fix issues, change balance or add and change features. We aim to keep the game and its online features working but cannot promise uninterrupted service or an error-free experience. Nothing in these terms excludes or limits rights, remedies or liability that cannot lawfully be excluded or limited.</p>
              <p>If these terms change, we will update the date on this page, and communicate material changes through the game or another appropriate channel.</p>
            </section>
            <section>
              <h2>Contact</h2>
              <p>Publisher: I Think Aloft<br />Game: WRECKSHIFT<br />Support: <a href={'mailto:' + siteConfig.contact.support}>{siteConfig.contact.support}</a></p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
