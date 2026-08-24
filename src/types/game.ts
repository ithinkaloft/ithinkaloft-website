export type GameStatus = 'available' | 'coming-soon' | 'in-development' | 'announced';

export interface GamePlatform {
  name: string;
}

export interface GameStoreLinks {
  googlePlay?: string;
  appStore?: string;
  steam?: string;
}

export interface GameMedia {
  hero?: string;
  thumbnail?: string;
  screenshots: string[];
  trailer?: string;
  video?: string;
}

export interface GameTheme {
  accent: string;
  accentSecondary?: string;
  background?: string;
  surface?: string;
  text?: string;
  mode?: 'dark' | 'light' | 'custom';
}

export interface GameSeo {
  title?: string;
  description: string;
  image?: string;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  features?: string[];
  
  status: GameStatus;
  platforms: GamePlatform[];
  store?: GameStoreLinks;
  
  media: GameMedia;
  theme: GameTheme;
  seo: GameSeo;
  featured?: boolean;
}
