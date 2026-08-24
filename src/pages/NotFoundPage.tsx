import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta 
        title="Page Not Found"
        description="The requested page could not be found."
        noIndex={true}
      />
      <Container style={{ paddingTop: 'var(--space-8)' }}>
        <h1>404</h1>
        <p>Page Not Found</p>
      </Container>
    </>
  );
}
