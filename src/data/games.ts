import type { Game } from '../types/game';

export const games: Game[] = [
  {
    id: 'wreckshift',
    slug: 'wreckshift',
    title: 'WRECKSHIFT',
    status: 'coming-soon',
    tagline: 'Outrun. Outsmart. Outlast.',
    shortDescription: 'An arcade police-chase driving game: make the police wreck, chain the pileups and stay loose as long as you can.',
    overview: {
      heading: 'The police never stop coming. Make them pay for it.',
      paragraphs: [
        'WRECKSHIFT drops you into arenas built to fight back: a scrapyard with a car crusher, rain-soaked neon docks with a container crane, a frozen quarry where the ice takes your grip. Every wreck you cause raises the heat until the whole force is after you.',
        'Survive Endless Chase for the leaderboard, win Showdowns against rival cars, work through 48 Missions, or bring up to three friends into the same yard on your Wi-Fi.'
      ]
    },
    genre: 'Arcade Police-Chase Driving',
    highlights: [
      { title: 'Three arenas that fight back', description: 'Crushers, cranes, ice and haul trucks: lure the chase into the yard and let it do the work.' },
      { title: 'Wreck Chains and Wanted levels', description: 'Chain police wrecks for huge scores while the Wanted level brings in more cars and the helicopter.' },
      { title: 'Ten cars, one garage', description: 'Earn Scrap, buy or rent your next car, pick its paint and learn how it handles the chase.' }
    ],
    platforms: [{ name: 'Android' }],
    availability: {
      label: 'Coming soon',
      description: 'The chase is almost ready.',
      note: 'WRECKSHIFT is preparing for its Android release. Follow the studio for launch news.'
    },
    media: {
      hero: { src: '/assets/games/wreckshift/web/breakyard.webp', alt: 'The WRECKSHIFT hero car speeds through the Breakyard at sunset with police behind', width: 1672, height: 941 },
      thumbnail: { src: '/assets/games/wreckshift/web/feature.webp', alt: 'WRECKSHIFT key art: a police chase through the Breakyard', width: 1024, height: 500 },
      screenshots: [
        { src: '/assets/games/wreckshift/web/01-breakyard-heli.webp', alt: 'Wanted 5 in the Breakyard: the police helicopter closes in over the container alley', width: 1600, height: 720, category: 'Inside the game' },
        { src: '/assets/games/wreckshift/web/02-breakyard-chase.webp', alt: 'Running the Breakyard wall with a police car and the helicopter on your tail', width: 1600, height: 720, category: 'Inside the game' },
        { src: '/assets/games/wreckshift/web/03-docks-neon.webp', alt: 'Neon Docks at night: headlights sweep the wet quay under the NEON DOCKS sign', width: 1600, height: 720, category: 'Inside the game' },
        { src: '/assets/games/wreckshift/web/04-docks-pileup.webp', alt: 'A police pileup behind the player on Warehouse Row in Neon Docks', width: 1600, height: 720, category: 'Inside the game' },
        { src: '/assets/games/wreckshift/web/05-quarry-heli.webp', alt: 'Frozen Quarry: the helicopter and four police cars converge on the ice', width: 1600, height: 720, category: 'Inside the game' },
        { src: '/assets/games/wreckshift/web/06-quarry-wrecks.webp', alt: 'Wrecked police cars in the Frozen Quarry blast area', width: 1600, height: 720, category: 'Inside the game' }
      ]
    },
    theme: {
      mode: 'dark',
      accent: '#ffb340',
      accentSecondary: '#8bdfcb',
      background: '#0c1015',
      surface: '#171d24',
      text: '#f3f0e5'
    },
    seo: {
      title: 'WRECKSHIFT',
      description: 'An arcade police-chase driving game for Android: three arenas, ten cars, 48 missions, Showdowns, leaderboards and Wi-Fi multiplayer. Coming soon.',
      image: '/assets/games/wreckshift/web/og-1200x630.webp'
    },
    featured: true
  },
  {
  "id": "sorting-war",
  "slug": "sorting-war",
  "title": "Sorting War",
  "status": "available",
  "tagline": "Every sort strikes back.",
  "shortDescription": "Sort the elements. Unleash your hero. Turn a satisfying puzzle into a battle worth winning.",
  "overview": {
    "heading": "A little strategy. A lot of firepower.",
    "paragraphs": [
      "Match the elements inside your tubes to launch attacks, build combos, and charge your hero\u2019s ultimate. Every move is a choice: strike now, or set up something bigger.",
      "Lead six heroes through 60 campaign battles across 12 fronts. Replay them on Elite, build a run in the endless Gauntlet, or invite a friend to play over local Wi-Fi."
    ]
  },
  "genre": "Elemental Puzzle Battler",
  "highlights": [
    {
      "title": "60 campaign battles",
      "description": "Twelve fronts with changing boards, boss battles, and a tougher Elite campaign."
    },
    {
      "title": "Six playable heroes",
      "description": "Choose Nova, Frost, Sprout, Volta, Hex, or Echo. Recruit heroes as you progress and upgrade their ultimates."
    },
    {
      "title": "More ways to battle",
      "description": "Team up against the AI or challenge a friend on the same Wi-Fi network. Play the Daily Challenge, Gauntlet, and Ranked ghost battles on your own."
    }
  ],
  "platforms": [
    {
      "name": "Android"
    }
  ],
  "store": {
    "googlePlay": "https://play.google.com/store/apps/details?id=com.ithinkaloft.brainak.sortingwar"
  },
  "availability": {
    "label": "Available now",
    "description": "Your next battle starts now.",
    "note": "Sorting War is out now on Android."
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
        "src": "/assets/games/sorting-war/web/07-aegis-fortress.webp",
        "alt": "Battle against the Imperator at Aegis Fortress",
        "width": 400,
        "height": 880,
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
    "description": "Sort, strike, and unleash hero ultimates in 60 campaign battles, Elite replays, Gauntlet, and local Wi-Fi battles. Available on Android.",
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
