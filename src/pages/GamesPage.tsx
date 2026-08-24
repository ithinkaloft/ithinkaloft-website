import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';

export default function GamesPage() {
  return (
    <>
      <PageMeta 
        title="Games"
        description="Explore games from ithinkaloft."
        path="/games"
      />
      <Container style={{ paddingTop: 'var(--space-8)' }}>
        <h1>GAMES</h1>
        <p>Games Catalogue Placeholder</p>
      </Container>
    </>
  );
}
