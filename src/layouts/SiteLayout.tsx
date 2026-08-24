import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

export default function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
}
