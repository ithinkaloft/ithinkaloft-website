import { Link } from 'react-router-dom';
import Container from '../../common/Container';
import './SortingWar.css';
const PLAY = 'https://play.google.com/store/apps/details?id=com.ithinkaloft.brainak.sortingwar';
export default function SortingWarShowcase({ home = false }: { home?: boolean }) {
  const Heading = 'h1';
  return <section className="sw-showcase" aria-label="Sorting War">
    <div className="sw-aura sw-aura-fire" aria-hidden="true" /><div className="sw-aura sw-aura-ice" aria-hidden="true" />
    <div className="sw-sparks" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i} style={{left: (8+i*8)+'%', animationDelay: (-i*1.3)+'s'}} />)}</div>
    <Container><div className="sw-showcase-grid">
      <div className="sw-showcase-copy">
        <p className="sw-eyebrow">{home ? 'ITHINKALOFT / OUT NOW' : 'ELEMENTAL PUZZLE BATTLER'}</p>
        <span className="sw-coming"><span /> Out now on Android</span>
        <Heading className="sw-title">SORTING<br /><em>WAR</em></Heading>
        <p className="sw-lead">Every sort<br />strikes back.</p>
        <p className="sw-description">Sort elements to launch attacks, build combos, and unleash your hero’s ultimate.</p>
        <div className="sw-actions"><a className="sw-gold-button" href={PLAY} target="_blank" rel="noopener noreferrer">Get it on Google Play <span aria-hidden="true">&#8599;</span></a>{home ? <Link className="sw-text-link" to="/games/sorting-war">Discover Sorting War <span aria-hidden="true">&#8594;</span></Link> : <a className="sw-text-link" href="#inside-the-game" onClick={(e) => {e.preventDefault();document.getElementById('inside-the-game')?.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});}}>See the gameplay <span aria-hidden="true">&#8595;</span></a>}</div>
        <div className="sw-facts"><div><strong>60</strong><span>Campaign battles</span></div><div><strong>6</strong><span>Playable heroes</span></div><div><strong>12</strong><span>Campaign fronts</span></div></div>
      </div>
      <div className="sw-art"><div className="sw-art-halo" aria-hidden="true" /><img src="/assets/games/sorting-war/web/cover.webp" alt="Sorting War heroes wielding fire, ice, and void magic above elemental puzzle tubes" width="1080" height="1920" fetchPriority="high" /><div className="sw-art-caption"><span>THINK FAST. SORT SMART.</span><span>FIGHT WITH THE ELEMENTS.</span></div></div>
    </div></Container>
  </section>;
}
