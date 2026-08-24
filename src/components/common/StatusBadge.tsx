import type { GameStatus } from '../../types/game';
import './StatusBadge.css';

interface StatusBadgeProps {
  status: GameStatus;
  className?: string;
}

const statusConfig: Record<GameStatus, { label: string; dotClass: string }> = {
  'available': { label: 'Available', dotClass: 'status-dot-available' },
  'in-development': { label: 'In Development', dotClass: 'status-dot-development' },
  'coming-soon': { label: 'Coming Soon', dotClass: 'status-dot-coming' },
  'announced': { label: 'Announced', dotClass: 'status-dot-announced' },
};

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status];

  // Fallback for unexpected status
  if (!config) {
    return null; 
  }

  return (
    <span className={`status-badge ${className}`.trim()}>
      <span className={`status-dot ${config.dotClass}`} aria-hidden="true" />
      <span className="status-text">{config.label}</span>
    </span>
  );
}
