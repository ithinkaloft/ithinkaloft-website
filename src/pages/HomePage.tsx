import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';

export default function HomePage() {
  return (
    <>
      <PageMeta 
        title="ithinkaloft"
        description="Independent games built with care."
        path="/"
      />
      <Container style={{ paddingTop: 'var(--space-8)' }}>
        <h1>HOME</h1>
        <p>Home Page Placeholder</p>
      </Container>
    </>
  );
}
