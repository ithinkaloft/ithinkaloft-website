import './GameMediaFallback.css';

interface GameMediaFallbackProps {
  title: string;
}

export default function GameMediaFallback({ title }: GameMediaFallbackProps) {
  return (
    <div className="game-media-fallback" aria-hidden="true">
      <span className="game-media-fallback-text">
        <span className="game-media-fallback-title">
          {title}
        </span>
        VISUAL PREVIEW
      </span>
    </div>
  );
}
