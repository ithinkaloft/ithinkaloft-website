import { Link } from 'react-router-dom';
import './Wreckshift.css';

const W = '/assets/games/wreckshift/web/';

/** WRECKSHIFT's page hero: the Breakyard key art full-bleed under the game's own wordmark and its tagline. */
export default function WreckshiftShowcase() {
  return (
    <section className="ws-showcase" aria-label="WRECKSHIFT">
      <img className="ws-showcase-art" src={W + 'breakyard.webp'} alt="The blue and orange hero car powers through the Breakyard at sunset with police cars close behind" width="1672" height="941" fetchPriority="high" />
      <div className="ws-showcase-shade" aria-hidden="true" />
      <div className="ws-showcase-inner">
        <p className="ws-eyebrow">ARCADE POLICE-CHASE DRIVING</p>
        <span className="ws-coming"><span /> Coming soon to Android</span>
        <h1 className="ws-wordmark">WRECK<em>SHIFT</em></h1>
        <p className="ws-tagline">OUTRUN. OUTSMART. OUTLAST.</p>
        <p className="ws-description">The police never stop coming. Make them wreck into each other, the walls and the yard's own machines, chain the pileups, and see how long you can stay loose.</p>
        <div className="ws-actions">
          <a className="ws-button" href="#ws-arenas" onClick={(e) => { e.preventDefault(); document.getElementById('ws-arenas')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }}>See the arenas <span aria-hidden="true">&#8595;</span></a>
          <Link className="ws-text-link" to="/contact">Get launch news <span aria-hidden="true">&#8594;</span></Link>
        </div>
        <div className="ws-facts">
          <div><strong>3</strong><span>Arenas</span></div>
          <div><strong>10</strong><span>Cars to own</span></div>
          <div><strong>45</strong><span>Missions</span></div>
          <div><strong>4</strong><span>Players on Wi-Fi</span></div>
        </div>
      </div>
    </section>
  );
}
