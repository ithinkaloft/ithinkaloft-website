import type { CSSProperties } from 'react';
import type { GameTheme } from '../types/game';

export type GameThemeStyle = CSSProperties & {
  '--game-accent'?: string;
  '--game-accent-secondary'?: string;
  '--game-background'?: string;
  '--game-surface'?: string;
  '--game-text'?: string;
};

export function getGameThemeStyle(theme: GameTheme): GameThemeStyle {
  return {
    '--game-accent': theme.accent,
    ...(theme.accentSecondary && {
      '--game-accent-secondary': theme.accentSecondary,
    }),
    ...(theme.background && {
      '--game-background': theme.background,
    }),
    ...(theme.surface && {
      '--game-surface': theme.surface,
    }),
    ...(theme.text && {
      '--game-text': theme.text,
    }),
  };
}
