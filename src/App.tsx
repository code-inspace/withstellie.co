import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import About from './pages/about2/index';
import LegalNotice from './pages/legal-notice/index';
import PrivacyPolicy from './pages/privacy-policy/index';
import OffreAvril from './pages/offre-avril/index';
import Coaching from './pages/coaching/index';
import Booking from './pages/booking/index';
import AboutNew from './pages/about/index';
import Contact from './pages/contact/index';
import NotFound from './pages/notfound/index';
import Home2 from './pages/home2/index';
import { PromoBanner } from './components/layout/PromoBanner';

function App() {
  return (
    <BrowserRouter>
      <PromoBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/about2" element={<About />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/offre-avril" element={<OffreAvril />} />
        <Route path="/en/april-offer" element={<OffreAvril />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/en/work-with-me" element={<Coaching />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/en/book" element={<Booking />} />
        <Route path="/a-propos" element={<AboutNew />} />
        <Route path="/en/about" element={<AboutNew />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/en/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
