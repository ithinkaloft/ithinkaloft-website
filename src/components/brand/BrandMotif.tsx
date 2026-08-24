
import './BrandMotif.css';

export default function BrandMotif() {
  return (
    <div className="brand-motif" aria-hidden="true">
      <svg 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="brand-motif-svg"
      >
        {/* Faint connecting lines */}
        <path 
          d="M 120 280 L 250 150 L 320 220" 
          stroke="rgba(255,255,255,0.06)" 
          strokeWidth="1" 
          strokeDasharray="4 4"
        />
        
        {/* Signature Element: Incomplete Ring */}
        <path 
          className="motif-ring"
          d="M 250 150 A 80 80 0 1 1 170 70" 
          stroke="var(--brand-primary)" 
          strokeWidth="2"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />

        {/* Small floating fragments */}
        <circle 
          className="motif-node motif-node-1"
          cx="120" 
          cy="280" 
          r="4" 
          fill="var(--brand-primary)" 
          fillOpacity="0.4" 
        />
        <circle 
          className="motif-node motif-node-2"
          cx="320" 
          cy="220" 
          r="2" 
          fill="#ffffff" 
          fillOpacity="0.12" 
        />
        <circle 
          className="motif-node motif-node-3"
          cx="200" 
          cy="320" 
          r="3" 
          fill="#ffffff" 
          fillOpacity="0.08" 
        />
        
        {/* Outlined Diamond */}
        <rect 
          className="motif-diamond"
          x="190" 
          y="140" 
          width="12" 
          height="12" 
          stroke="#ffffff" 
          strokeWidth="1" 
          strokeOpacity="0.1" 
          transform="rotate(45 196 146)"
        />

        {/* Partial ring fragment */}
        <path 
          className="motif-fragment"
          d="M 280 280 A 30 30 0 0 1 250 310" 
          stroke="#ffffff" 
          strokeWidth="1"
          strokeOpacity="0.15"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
