import { Link } from 'react-router-dom';
import Container from '../../common/Container';
import './SortingWar.css';
export default function SortingWarShowcase({ home = false }: { home?: boolean }) {
  const Heading = 'h1';
  return <section className="sw-showcase" aria-label="Sorting War">
    <div className="sw-aura sw-aura-fire" aria-hidden="true" /><div className="sw-aura sw-aura-ice" aria-hidden="true" />
    <div className="sw-sparks" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i} style={{left: (8+i*8)+'%', animationDelay: (-i*1.3)+'s'}} />)}</div>
    <Container><div className="sw-showcase-grid">
      <div className="sw-showcase-copy">
        <p className="sw-eyebrow">{home ? 'ITHINKALOFT / OUR NEXT ADVENTURE' : 'ELEMENTAL PUZZLE BATTLER'}</p>
        <span className="sw-coming"><span /> Coming soon to Android</span>
        <Heading className="sw-title">SORTING<br /><em>WAR</em></Heading>
        <p className="sw-lead">Every sort<br />strikes back.</p>
        <p className="sw-description">Five heroes. A world of elements. Sort your way to powerful combos and turn every clever move into your next victory.</p>
        <div className="sw-actions"><Link className="sw-gold-button" to={home ? '/games/sorting-war' : '#inside-the-game'} onClick={home ? undefined : (e) => {e.preventDefault();document.getElementById('inside-the-game')?.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});}}> {home ? 'Discover Sorting War' : 'See the gameplay'} <span aria-hidden="true">&#8599;</span></Link><Link className="sw-text-link" to={home ? '/about' : '/contact'}>{home ? 'Meet the studio' : 'Get in touch'} <span aria-hidden="true">&#8594;</span></Link></div>
        <div className="sw-facts"><div><strong>40</strong><span>Campaign battles</span></div><div><strong>5</strong><span>Elemental heroes</span></div><div><strong>&#8734;</strong><span>Gauntlet possibilities</span></div></div>
      </div>
      <div className="sw-art"><div className="sw-art-halo" aria-hidden="true" /><img src="/assets/games/sorting-war/web/cover.webp" alt="Sorting War heroes wielding fire, ice, and void magic above elemental puzzle tubes" width="1080" height="1920" fetchPriority="high" /><div className="sw-art-caption"><span>THINK FAST. SORT SMART.</span><span>FIGHT WITH THE ELEMENTS.</span></div></div>
    </div></Container>
  </section>;
}
