import React from 'react';
import type { GameTheme } from '../../types/game';
import { getGameThemeStyle } from '../../utils/theme';

interface GameThemeScopeProps {
  theme: GameTheme;
  children: React.ReactNode;
  className?: string;
}

export function GameThemeScope({ theme, children, className = '' }: GameThemeScopeProps) {
  return (
    <div className={`game-theme-scope ${className}`.trim()} style={getGameThemeStyle(theme)}>
      {children}
    </div>
  );
}
