import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';
import { siteConfig } from '../data/site';
import './PrivacyPage.css';

export default function SortingWarTermsPage() {
  return (
    <main className="page-privacy">
      <PageMeta title="Sorting War Terms & Conditions | I Think Aloft" description="Terms for playing Sorting War, using online features and purchasing Commander Pack." path="/terms/sorting-war" />
      <Container>
        <article className="privacy-article">
          <header className="privacy-header">
            <span className="privacy-eyebrow">GAME TERMS</span>
            <h1 className="privacy-title">Sorting War Terms &amp; Conditions</h1>
            <p className="privacy-date">Last updated: October 14, 2026</p>
          </header>
          <div className="privacy-content">
            <section>
              <h2>About these terms</h2>
              <p>These terms describe your use of Sorting War, published by I Think Aloft. Please read them before playing or making a purchase. If you cannot agree to them, stop using the game. If you are not legally able to agree on your own, ask your parent or guardian to review them with you and provide any permission required by applicable law.</p>
            </section>
            <section>
              <h2>Playing the game</h2>
              <p>You may install and play Sorting War for your personal, non-commercial entertainment. The game, artwork, audio, code and branding remain the property of I Think Aloft or their respective licensors. This permission does not transfer ownership of those materials.</p>
              <p>Do not use the game to break the law, impersonate others, interfere with services, submit manipulated scores or exploit online systems. We may remove fraudulent leaderboard records or restrict misuse of online features. Rights that applicable law expressly permits remain unaffected.</p>
            </section>
            <section>
              <h2>Progress and online features</h2>
              <p>Core progress is saved on your device. Uninstalling, clearing app data or changing devices can remove local progress. Google Play Games sign-in does not by itself provide a cloud backup of all gameplay progress.</p>
              <p>Daily and Gauntlet leaderboards and Ranked ghost battles use online services. Ranked opponents are recordings or simulations based on player performance, rather than live head-to-head play. Your display name, scores, ratings and related gameplay information may be visible to other players as described in our <Link to="/privacy/sorting-war">Privacy Policy</Link>.</p>
              <p>Online services require connectivity and may be interrupted or changed. Scores, rankings and virtual rewards have no cash value and cannot be redeemed for money or transferred between players through the game.</p>
            </section>
            <section>
              <h2>Purchases and Commander Pack</h2>
              <p>Sorting War is free to download and offers an optional, one-time Commander Pack purchase through Google Play. The purchase screen shows the applicable price and included benefits before confirmation. Commander Pack unlocks Volta and Hex, grants bonus coins, increases coin earnings by 20% and removes automatic interstitial ads. Optional rewarded ads remain available.</p>
              <p>The pack is a non-consumable purchase, not a subscription. It is not subject to a recurring subscription charge. Google Play processes payment under its own terms. Restoring a valid purchase requires the same Google Play account that bought it and a successful ownership check; restoring the pack does not restore all local gameplay progress.</p>
              <p>For purchase problems, contact us at <a href={'mailto:' + siteConfig.contact.support}>{siteConfig.contact.support}</a>. Refund eligibility follows <a href="https://support.google.com/googleplay/answer/2479637?hl=en">Google Play refund policies</a> and applicable consumer law. These terms do not remove any mandatory refund or other consumer rights.</p>
            </section>
            <section>
              <h2>Advertisements and third-party services</h2>
              <p>The game can show automatic interstitial ads between eligible battles and optional rewarded ads. A rewarded benefit is granted when the ad service confirms completion; an unavailable or incomplete ad may not grant a reward. Commander Pack removes automatic interstitial ads but does not remove optional rewarded-ad offers.</p>
              <p>Google Play, Google Play Games, Firebase and advertising providers operate under their own applicable terms and policies. Our <Link to="/privacy/sorting-war">Privacy Policy</Link> explains data handling and available privacy controls. You can <Link to="/privacy/sorting-war/delete-data">request deletion of your online player data</Link>.</p>
            </section>
            <section>
              <h2>Updates, availability and your rights</h2>
              <p>We may release updates to fix issues, adjust balance or change features. We aim to keep the game working, but cannot promise uninterrupted online access or an error-free experience. Nothing here excludes or limits rights, remedies or liability that cannot lawfully be excluded or limited.</p>
              <p>If these terms change, we will update the date on this page. Material changes affecting your rights or purchases will be communicated through the game or another appropriate channel. Contact us if you have questions about a change.</p>
            </section>
            <section>
              <h2>Contact</h2>
              <p>Publisher: I Think Aloft<br />Game: Sorting War<br />Support: <a href={'mailto:' + siteConfig.contact.support}>{siteConfig.contact.support}</a></p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
