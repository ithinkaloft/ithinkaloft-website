import { useParams } from 'react-router-dom';
import { getGameBySlug } from '../data/games';
import NotFoundPage from './NotFoundPage';
import { GameLayout } from '../layouts/GameLayout';
import GameHero from '../components/games/GameHero';
import GameOverview from '../components/games/GameOverview';
import GameHighlights from '../components/games/GameHighlights';
import SortingWarExperience from '../components/games/details/SortingWarExperience';
import PocketPuzzleArcadeExperience from '../components/games/details/PocketPuzzleArcadeExperience';
import GameMediaGallery from '../components/games/GameMediaGallery';
import GameAvailability from '../components/games/GameAvailability';
import MoreGames from '../components/games/MoreGames';
import PageMeta from '../components/common/PageMeta';
import type { Game } from '../types/game';

import React from 'react';
import SortingWarShowcase from '../components/games/details/SortingWarShowcase';

const gameSpecificExperiences: Record<string, React.FC<{ game: Game }>> = {
  'sorting-war': () => <SortingWarExperience />,
  'pocket-puzzle-arcade': (props) => <PocketPuzzleArcadeExperience {...props} />,
};

export default function GameDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) return <NotFoundPage />;
  
  const game = getGameBySlug(slug);
  
  if (!game) {
    return <NotFoundPage />;
  }

  const CustomExperienceComponent = gameSpecificExperiences[game.slug];

  return (
    <>
      <PageMeta 
        title={game.seo.title ?? game.title}
        description={game.seo.description}
        path={`/games/${game.slug}`}
        image={game.seo.image}
      />
      <div className={game.slug === 'sorting-war' ? 'sw-game' : ''}><GameLayout game={game}>
        {/* Game Hero */}
        {game.slug === 'sorting-war' ? <SortingWarShowcase /> : <GameHero game={game} />}

        {/* Game Overview */}
        <GameOverview game={game} />

        {/* Game Highlights */}
        <GameHighlights game={game} />

        {/* Game-Specific Custom Experience */}
        {CustomExperienceComponent && <CustomExperienceComponent game={game} />}

        {/* Game Media Gallery */}
        <GameMediaGallery game={game} />

        {/* Game Availability */}
        <GameAvailability game={game} />
        {game.slug === 'sorting-war' && <p style={{textAlign: 'center', padding: '0 20px 36px'}}><a href="/privacy/sorting-war" style={{color: '#c7b48f', fontSize: '13px'}}>Sorting War privacy policy</a></p>}
      </GameLayout></div>

      {/* More Games sits outside GameLayout to return to the studio theme */}
      <MoreGames currentGame={game} />
    </>
  );
}
