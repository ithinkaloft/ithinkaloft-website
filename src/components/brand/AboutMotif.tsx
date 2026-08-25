import './AboutMotif.css';

export default function AboutMotif() {
  return (
    <div className="about-motif" aria-hidden="true">
      <svg viewBox="0 0 1024 583" className="about-motif-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid slice">
        {/* Raster Background Image */}
        <image href="/assets/brand/web/about-hero-bg.webp" width="1024" height="583" />

        {/* Animated Purple Ring positioned exactly over the stone ring in the image */}
        {/* Coordinates (720, 340) are approximate for the stone ring center in the 1024x583 source */}
        <g transform="translate(718, 340)">
          {/* Central unifying shape - the rotating incomplete ring */}
          <path 
            d="M 0 -48 A 48 48 0 1 1 -35 32" 
            fill="none" 
            stroke="var(--brand-primary)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            className="about-motif-ring"
            style={{ filter: 'drop-shadow(0 0 8px var(--brand-primary))' }}
          />
          {/* Orbiting diamond element */}
          <rect x="25" y="25" width="8" height="8" className="about-motif-diamond" />
        </g>
      </svg>
    </div>
  );
}
