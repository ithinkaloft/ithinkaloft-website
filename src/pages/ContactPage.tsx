import Container from '../components/common/Container';
import PageMeta from '../components/common/PageMeta';

export default function ContactPage() {
  return (
    <>
      <PageMeta 
        title="Contact"
        description="Get in touch with ithinkaloft."
        path="/contact"
      />
      <Container style={{ paddingTop: 'var(--space-8)' }}>
        <h1>CONTACT</h1>
        <p>Contact Page Placeholder</p>
      </Container>
    </>
  );
}
