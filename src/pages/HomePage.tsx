import PageMeta from '../components/common/PageMeta';
import { games } from '../data/games';
import HomeHero from '../components/sections/HomeHero';
import FeaturedGame from '../components/sections/FeaturedGame';
import GamesPreview from '../components/sections/GamesPreview';
import StudioIntro from '../components/sections/StudioIntro';
import HomeClosingCta from '../components/sections/HomeClosingCta';

export default function HomePage() {
  const featuredGame = games.find(g => g.featured);

  return (
    <>
      <PageMeta 
        title="ithinkaloft"
        description="Independent games built with care."
        path="/"
      />
      
      <HomeHero />
      
      {featuredGame && <FeaturedGame game={featuredGame} />}
      
      <GamesPreview games={games} />
      
      <StudioIntro />
      
      <HomeClosingCta />
    </>
  );
}
