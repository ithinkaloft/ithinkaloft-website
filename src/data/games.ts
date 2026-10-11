import type { Game } from '../types/game';

export const games: Game[] = [
  {
  "id": "sorting-war",
  "slug": "sorting-war",
  "title": "Sorting War",
  "status": "coming-soon",
  "tagline": "Every sort strikes back.",
  "shortDescription": "Sort the elements. Unleash your hero. Turn a satisfying puzzle into a battle worth winning.",
  "overview": {
    "heading": "A little strategy. A lot of firepower.",
    "paragraphs": [
      "Match the elements inside your tubes to launch attacks, build combos, and charge your hero\u2019s ultimate. Every move is a choice: strike now, or set up something bigger.",
      "Lead five elemental heroes through 40 campaign battles, return for the tougher Elite campaign, or see how far your build can go in the endless Gauntlet."
    ]
  },
  "genre": "Elemental Puzzle Battler",
  "highlights": [
    {
      "title": "40 campaign battles",
      "description": "Eight fronts with changing boards, new twists, and bosses that test your strategy."
    },
    {
      "title": "Five elemental heroes",
      "description": "Choose Nova, Frost, Sprout, Volta, or Hex. Upgrade your favorite and master their ultimate."
    },
    {
      "title": "More ways to battle",
      "description": "Daily challenges, endless Gauntlet runs, and Ranked battles against player-inspired ghosts."
    }
  ],
  "platforms": [
    {
      "name": "Android"
    }
  ],
  "availability": {
    "label": "Coming soon",
    "description": "Your next battle is taking shape.",
    "note": "Sorting War is preparing for its Android release. Follow the studio for launch updates."
  },
  "media": {
    "hero": {
      "src": "/assets/games/sorting-war/web/cover.webp",
      "alt": "Sorting War elemental heroes gathered around glowing puzzle tubes",
      "width": 1080,
      "height": 1920
    },
    "thumbnail": {
      "src": "/assets/games/sorting-war/web/feature.webp",
      "alt": "Sorting War fantasy puzzle battle artwork",
      "width": 1024,
      "height": 500
    },
    "screenshots": [
      {
        "src": "/assets/games/sorting-war/web/01-elemental-battle.webp",
        "alt": "Elemental sorting battle with heroes and attack tubes",
        "width": 720,
        "height": 1280,
        "category": "Inside the game"
      },
      {
        "src": "/assets/games/sorting-war/web/02-storm-and-sealed-tubes.webp",
        "alt": "Storm battle featuring sealed tubes",
        "width": 720,
        "height": 1280,
        "category": "Inside the game"
      },
      {
        "src": "/assets/games/sorting-war/web/03-convergence-boss.webp",
        "alt": "Convergence boss battle",
        "width": 720,
        "height": 1280,
        "category": "Inside the game"
      },
      {
        "src": "/assets/games/sorting-war/web/04-campaign-40-levels.webp",
        "alt": "Campaign map across eight fronts",
        "width": 720,
        "height": 1280,
        "category": "Inside the game"
      },
      {
        "src": "/assets/games/sorting-war/web/05-hero-upgrades.webp",
        "alt": "Hero upgrade screen",
        "width": 720,
        "height": 1280,
        "category": "Inside the game"
      },
      {
        "src": "/assets/games/sorting-war/web/06-gauntlet-upgrades.webp",
        "alt": "Gauntlet upgrades between rounds",
        "width": 720,
        "height": 1280,
        "category": "Inside the game"
      }
    ]
  },
  "theme": {
    "mode": "dark",
    "accent": "#f4cf85",
    "accentSecondary": "#bd9cff",
    "background": "#0d0c17",
    "surface": "#191526",
    "text": "#fbf4e8"
  },
  "seo": {
    "title": "Sorting War",
    "description": "An elemental puzzle battler with five heroes, 40 campaign battles, Elite difficulty, Gauntlet, and daily challenges. Coming soon to Android.",
    "image": "/assets/games/sorting-war/web/feature.webp"
  },
  "featured": true
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
