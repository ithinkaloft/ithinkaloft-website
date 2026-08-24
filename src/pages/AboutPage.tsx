import AboutHero from '../components/sections/about/AboutHero';
import StudioStory from '../components/sections/about/StudioStory';
import StudioPrinciples from '../components/sections/about/StudioPrinciples';
import AboutGames from '../components/sections/about/AboutGames';
import AboutClosing from '../components/sections/about/AboutClosing';
import PageMeta from '../components/common/PageMeta';
import { games as allGames } from '../data/games';

export default function AboutPage() {
  return (
    <main className="page-about">
      <PageMeta 
        title="About | ithinkaloft" 
        description="Learn about ithinkaloft, an independent game studio focused on thoughtful gameplay, distinctive ideas, and polished experiences." 
        path="/about" 
      />
      
      <AboutHero />
      <StudioStory />
      <StudioPrinciples />
      <AboutGames games={allGames} />
      <AboutClosing />
    </main>
  );
}
