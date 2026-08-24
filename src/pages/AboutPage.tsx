import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';

export default function AboutPage() {
  return (
    <>
      <PageMeta 
        title="About"
        description="Learn more about ithinkaloft studio."
        path="/about"
      />
      <Container style={{ paddingTop: 'var(--space-8)' }}>
        <h1>ABOUT</h1>
        <p>About Page Placeholder</p>
      </Container>
    </>
  );
}
