import PageMeta from '../components/common/PageMeta';
import { games } from '../data/games';
import HomeHero from '../components/sections/HomeHero';

import GamesPreview from '../components/sections/GamesPreview';
import StudioIntro from '../components/sections/StudioIntro';
import HomeClosingCta from '../components/sections/HomeClosingCta';

export default function HomePage() {


  return (
    <>
      <PageMeta 
        title="ithinkaloft"
        description="Independent games built with care."
        path="/"
      />
      

      
      <HomeHero />
      
      <GamesPreview games={games} />
      
      <StudioIntro />
      
      <HomeClosingCta />
    </>
  );
}
