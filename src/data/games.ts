import type { Game } from '../types/game';

export const games: Game[] = [
  {
    id: 'core-forge',
    slug: 'core-forge',
    title: 'CORE FORGE',
    status: 'in-development',
    tagline: 'Puzzle strategy meets roguelite combat.',
    shortDescription: 'An atmospheric puzzle game blending satisfying mechanics with deep progression.',
    overview: {
      heading: 'Solve. Power. Survive.',
      paragraphs: [
        'CORE FORGE combines sorting puzzles with real-time combat. Solving chambers generates the energy needed to power an expanding arsenal, turning every puzzle decision into part of the fight.',
        'Push deeper through an evolving facility, adapt your build, confront increasingly dangerous enemies, and survive the systems waiting below.'
      ]
    },
    genre: 'Atmospheric Strategy Puzzle',
    highlights: [
      {
        title: 'Puzzle-Powered Combat',
        description: 'Convert spatial puzzle mechanics into devastating attacks and defense.'
      },
      {
        title: 'Build Your Arsenal',
        description: 'Discover, unlock, and experiment with evolving weapon combinations.'
      },
      {
        title: 'Evolving Facility',
        description: 'Navigate through five distinct, procedurally influenced dark industrial sectors.'
      }
    ],
    platforms: [{ name: 'Android' }],
    availability: {
      label: 'In Development',
      description: 'The facility is still being forged.',
      note: 'Development is underway for Android.'
    },
    media: {},
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
    overview: {
      heading: 'A collection built for one more puzzle.',
      paragraphs: [
        'Pocket Puzzle Arcade brings a growing collection of puzzle experiences together in one place, designed for quick sessions, repeat play, and steadily increasing challenge.',
        'Each game keeps its own rules and rhythm while sharing one polished arcade home.'
      ]
    },
    genre: 'Arcade Puzzle',
    highlights: [
      {
        title: 'Quick Sessions',
        description: 'Designed for immediate fun and challenging high scores in short bursts.'
      },
      {
        title: 'Vibrant Interactions',
        description: 'A colorful, tactile interface that makes every move feel rewarding.'
      }
    ],
    modes: [
      {
        name: 'Sliding Puzzle',
        description: 'Rearrange the board and restore the pattern.'
      },
      {
        name: 'Snake',
        description: 'Navigate the grid, grow your tail, and avoid the walls.'
      },
      {
        name: 'Memory Match',
        description: 'Find the hidden pairs before time runs out.'
      },
      {
        name: 'Block Drop',
        description: 'Fit the shapes and clear the lines.'
      },
      {
        name: 'Color Connect',
        description: 'Link matching nodes without crossing paths.'
      }
    ],
    platforms: [{ name: 'Android' }],
    store: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.ithinkaloft.pocketpuzzlearcade&hl=en_IN'
    },
    availability: {
      label: 'Available Now',
      description: 'Ready for another puzzle?',
      note: 'Pocket Puzzle Arcade is available on Android.'
    },
    media: {},
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
