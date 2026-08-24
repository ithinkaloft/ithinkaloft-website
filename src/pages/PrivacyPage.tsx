import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';

export default function PrivacyPage() {
  return (
    <>
      <PageMeta 
        title="Privacy"
        description="Privacy policy for ithinkaloft games and website."
        path="/privacy"
      />
      <Container style={{ paddingTop: 'var(--space-8)' }}>
        <h1>PRIVACY</h1>
        <p>Privacy Page Placeholder</p>
      </Container>
    </>
  );
}
