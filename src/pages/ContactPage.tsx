import ContactHero from '../components/sections/contact/ContactHero';
import ContactMethods from '../components/sections/contact/ContactMethods';
import PageMeta from '../components/common/PageMeta';

export default function ContactPage() {
  return (
    <main className="page-contact">
      <PageMeta 
        title="Contact | ithinkaloft" 
        description="Contact ithinkaloft for studio enquiries, game support, feedback, and business requests." 
        path="/contact" 
      />
      
      <ContactHero />
      <ContactMethods />
    </main>
  );
}
