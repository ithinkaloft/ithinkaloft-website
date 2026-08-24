export type GameStatus = 'available' | 'coming-soon' | 'in-development' | 'announced';

export interface GamePlatform {
  name: string;
}

export interface GameStoreLinks {
  googlePlay?: string;
  appStore?: string;
  steam?: string;
}

export interface GameMediaSource {
  src: string;
  width: number;
}

export interface GameMediaImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sources?: GameMediaSource[];
}

export interface GameMedia {
  thumbnail?: GameMediaImage;
  hero?: GameMediaImage;
  screenshots?: GameMediaImage[];
  trailer?: string;
  video?: string;
  logo?: string;
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

export interface GameHighlight {
  title: string;
  description: string;
}

export interface GameAvailability {
  label: string;
  description?: string;
  note?: string;
}

export interface GameOverviewData {
  heading: string;
  paragraphs: string[];
}

export interface GameMode {
  name: string;
  description?: string;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  
  overview: GameOverviewData;
  genre?: string;
  highlights?: GameHighlight[];
  modes?: GameMode[];
  
  status: GameStatus;
  platforms: GamePlatform[];
  store?: GameStoreLinks;
  availability?: GameAvailability;
  
  media: GameMedia;
  theme: GameTheme;
  seo: GameSeo;
  featured?: boolean;
}
