import type { Game } from '../types/game';

export const games: Game[] = [
  {
    id: 'core-forge',
    slug: 'core-forge',
    title: 'CORE FORGE',
    status: 'in-development',
    tagline: 'Puzzle strategy meets roguelite combat.',
    shortDescription: 'An atmospheric puzzle game blending satisfying mechanics with deep progression.',
    description: 'An atmospheric puzzle experience where energy management meets combat. Explore dark industrial sectors and master deep mechanics.',
    platforms: [{ name: 'Android' }],
    media: {
      screenshots: []
    },
    theme: {
      mode: 'dark',
      accent: '#69e6ff',
      accentSecondary: '#ff9a55',
      background: '#071016',
      surface: '#101b22',
      text: '#f3f8fa',
    },
    seo: {
      title: 'CORE FORGE',
      description: 'An atmospheric puzzle game blending satisfying mechanics with deep progression.',
    },
    featured: true
  },
  {
    id: 'pocket-puzzle-arcade',
    slug: 'pocket-puzzle-arcade',
    title: 'Pocket Puzzle Arcade',
    status: 'available',
    tagline: 'Colorful, approachable arcade fun.',
    shortDescription: 'A vibrant collection of satisfying and approachable puzzle challenges.',
    description: 'A vibrant collection of satisfying and approachable puzzle challenges designed for quick sessions and high scores.',
    platforms: [{ name: 'Android' }],
    store: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.ithinkaloft.pocketpuzzlearcade&hl=en_IN'
    },
    media: {
      screenshots: []
    },
    theme: {
      mode: 'light',
      accent: '#a98cff',
      accentSecondary: '#ffcf5c',
      background: '#0d0b18',
      surface: '#18142a',
      text: '#f8f6ff',
    },
    seo: {
      title: 'Pocket Puzzle Arcade',
      description: 'A vibrant collection of satisfying and approachable puzzle challenges.',
    }
  }
];

export const getGameBySlug = (slug: string): Game | undefined => {
  return games.find((game) => game.slug === slug);
};

export const getReleasedGames = (): Game[] => {
  return games.filter((game) => game.status === 'available');
};

export const getInDevelopmentGames = (): Game[] => {
  return games.filter((game) => game.status === 'in-development' || game.status === 'coming-soon');
};
