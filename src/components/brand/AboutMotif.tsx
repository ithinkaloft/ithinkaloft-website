import './AboutMotif.css';

export default function AboutMotif() {
  return (
    <div className="about-motif" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="about-motif-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="about-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--brand-primary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Ambient drift points */}
        <circle cx="50" cy="100" r="1.5" className="about-motif-dot dot-1" />
        <circle cx="80" cy="300" r="1.5" className="about-motif-dot dot-2" />
        <circle cx="350" cy="80" r="1.5" className="about-motif-dot dot-3" />

        {/* Converging horizontal structure lines */}
        <line x1="80" y1="160" x2="280" y2="160" className="about-motif-line line-1" />
        <line x1="120" y1="240" x2="320" y2="240" className="about-motif-line line-2" />

        {/* Central unifying shape - the incomplete ring */}
        <path 
          d="M 200 130 A 70 70 0 1 1 145 155" 
          fill="none" 
          stroke="var(--brand-primary)" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          className="about-motif-ring"
        />

        {/* Diamonds representing formed ideas connecting to the structure */}
        <rect x="274" y="154" width="12" height="12" className="about-motif-diamond d-1" />
        <rect x="114" y="234" width="12" height="12" className="about-motif-diamond d-2" />
        
        {/* Diagonal stabilizing struts */}
        <line x1="280" y1="160" x2="240" y2="210" className="about-motif-strut" />
        <line x1="120" y1="240" x2="160" y2="190" className="about-motif-strut" />
      </svg>
    </div>
  );
}
