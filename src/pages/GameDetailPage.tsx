import { useParams } from 'react-router-dom';
import { getGameBySlug } from '../data/games';
import NotFoundPage from './NotFoundPage';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import { GameLayout } from '../layouts/GameLayout';
import PageMeta from '../components/common/PageMeta';

export default function GameDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) return <NotFoundPage />;
  
  const game = getGameBySlug(slug);
  
  if (!game) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageMeta 
        title={game.seo.title ?? game.title}
        description={game.seo.description}
        path={`/games/${game.slug}`}
        image={game.seo.image}
      />
      <GameLayout game={game}>
        <Container>
          <Section spacing="large">
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <span style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                color: 'var(--game-accent, var(--brand-primary))',
                marginBottom: 'var(--space-3)'
              }}>
                Game Detail Prototype
              </span>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                margin: '0 0 var(--space-4) 0',
                lineHeight: 1.1 
              }}>
                {game.title}
              </h1>
              <p style={{ 
                fontSize: '1.125rem', 
                color: 'var(--text-secondary)', 
                maxWidth: '42rem',
                margin: 0,
                lineHeight: 1.6
              }}>
                {game.description}
              </p>
            </div>
          </Section>
        </Container>
      </GameLayout>
    </>
  );
}
