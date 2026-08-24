import React from 'react';
import type { Game } from '../types/game';
import { GameThemeScope } from '../components/games/GameThemeScope';
import './GameLayout.css';

interface GameLayoutProps {
  game: Game;
  children: React.ReactNode;
}

export function GameLayout({ game, children }: GameLayoutProps) {
  return (
    <GameThemeScope theme={game.theme} className="game-layout">
      {children}
    </GameThemeScope>
  );
}
