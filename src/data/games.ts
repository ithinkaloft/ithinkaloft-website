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
    media: {
      hero: {
        src: '/assets/games/core-forge/web/core-forge-hero-1600.webp',
        alt: 'Atmospheric reactor chamber of the CORE FORGE facility',
        width: 1600,
        height: 3557, // 1600 * 1870 / 841
        sources: [
          { src: '/assets/games/core-forge/web/core-forge-hero-1600.webp', width: 1600 },
          { src: '/assets/games/core-forge/web/core-forge-hero-1200.webp', width: 1200 },
          { src: '/assets/games/core-forge/web/core-forge-hero-800.webp', width: 800 }
        ]
      },
      thumbnail: {
        src: '/assets/games/core-forge/web/core-forge-thumbnail-960.webp',
        alt: 'Four colored energy systems feeding the CORE FORGE machinery',
        width: 960,
        height: 540,
        sources: [
          { src: '/assets/games/core-forge/web/core-forge-thumbnail-960.webp', width: 960 },
          { src: '/assets/games/core-forge/web/core-forge-thumbnail-640.webp', width: 640 }
        ]
      },
      screenshots: [
        { src: '/assets/games/core-forge/web/gameplay-wave.webp', alt: 'CORE FORGE gameplay showing the sorting puzzle, weapon systems and automated enemies.', width: 727, height: 1510, category: 'Gameplay' },
        { src: '/assets/games/core-forge/web/gameplay-boss-crusher.webp', alt: 'Crusher boss encounter during Sector 1 of CORE FORGE.', width: 727, height: 1510, category: 'Gameplay' },
        { src: '/assets/games/core-forge/web/weapon-fusion.webp', alt: 'Weapon Fusion choices including Cryo Burst, Toxic Surge and Frozen Plague.', width: 727, height: 1510, category: 'Gameplay' },
        { src: '/assets/games/core-forge/web/facility-ai-alert.webp', alt: 'Facility AI security alert introducing the automated defense takeover.', width: 727, height: 1510, category: 'Gameplay' },
        { src: '/assets/games/core-forge/web/opening-directive.webp', alt: 'Four energy systems feeding the CORE FORGE facility machinery.', width: 1024, height: 1536, category: 'World & Systems' },
        { src: '/assets/games/core-forge/web/opening-threat.webp', alt: 'Automated machines occupying a hostile CORE FORGE facility sector.', width: 1024, height: 1536, category: 'World & Systems' }
      ]
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
      image: '/assets/games/core-forge/web/core-forge-og-1200x630.webp'
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
        name: 'Sliding Tile',
        description: 'Restore the board, one move at a time.'
      },
      {
        name: '2048',
        description: 'Merge matching tiles and chase a higher score.'
      },
      {
        name: 'Block Drop',
        description: 'Fit falling pieces and clear the lines.'
      },
      {
        name: 'Tic-Tac-Toe',
        description: 'Read the board and find three in a row.'
      },
      {
        name: 'Snake',
        description: 'Navigate the grid, grow and survive.'
      },
      {
        name: 'Minesweeper',
        description: 'Clear the field without triggering a mine.'
      },
      {
        name: 'Sudoku',
        description: 'Complete the grid through logic and deduction.'
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
    media: {
      hero: {
        src: '/assets/games/pocket-puzzle-arcade/web/pocket-puzzle-arcade-hero-1024.webp',
        alt: 'Pocket Puzzle Arcade collection featuring seven classic puzzle games',
        width: 1024,
        height: 500,
        sources: [
          { src: '/assets/games/pocket-puzzle-arcade/web/pocket-puzzle-arcade-hero-1024.webp', width: 1024 },
          { src: '/assets/games/pocket-puzzle-arcade/web/pocket-puzzle-arcade-hero-768.webp',  width: 768 },
          { src: '/assets/games/pocket-puzzle-arcade/web/pocket-puzzle-arcade-hero-512.webp',  width: 512 }
        ]
      },
      thumbnail: {
        src: '/assets/games/pocket-puzzle-arcade/web/pocket-puzzle-arcade-thumbnail-889.webp',
        alt: 'Pocket Puzzle Arcade — a collection of classic puzzle games',
        width: 889,
        height: 500,
        sources: [
          { src: '/assets/games/pocket-puzzle-arcade/web/pocket-puzzle-arcade-thumbnail-889.webp', width: 889 },
          { src: '/assets/games/pocket-puzzle-arcade/web/pocket-puzzle-arcade-thumbnail-640.webp', width: 640 }
        ]
      },
      screenshots: [
        { src: '/assets/games/pocket-puzzle-arcade/web/pocket-home.webp',          alt: 'Pocket Puzzle Arcade game selection screen',            width: 540, height: 960, category: 'Arcade Collection' },
        { src: '/assets/games/pocket-puzzle-arcade/web/pocket-sliding-tile.webp',  alt: 'Sliding Tile gameplay in Pocket Puzzle Arcade',          width: 540, height: 960, category: 'Arcade Collection' },
        { src: '/assets/games/pocket-puzzle-arcade/web/pocket-2048.webp',          alt: '2048 gameplay in Pocket Puzzle Arcade',                  width: 540, height: 960, category: 'Arcade Collection' },
        { src: '/assets/games/pocket-puzzle-arcade/web/pocket-block-drop.webp',    alt: 'Block Drop gameplay in Pocket Puzzle Arcade',            width: 540, height: 960, category: 'Arcade Collection' },
        { src: '/assets/games/pocket-puzzle-arcade/web/pocket-snake.webp',         alt: 'Snake gameplay in Pocket Puzzle Arcade',                 width: 540, height: 960, category: 'Arcade Collection' },
        { src: '/assets/games/pocket-puzzle-arcade/web/pocket-minesweeper.webp',   alt: 'Minesweeper gameplay in Pocket Puzzle Arcade',           width: 540, height: 960, category: 'Arcade Collection' },
        { src: '/assets/games/pocket-puzzle-arcade/web/pocket-sudoku.webp',        alt: 'Sudoku gameplay in Pocket Puzzle Arcade',                width: 540, height: 960, category: 'Arcade Collection' }
      ]
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
      image: '/assets/games/pocket-puzzle-arcade/web/pocket-puzzle-arcade-og-1200x630.webp'
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
