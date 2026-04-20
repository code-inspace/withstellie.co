import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLoader } from './components/layout/PageLoader';
import { PromoBanner } from './components/layout/PromoBanner';
import { ScrollToTop } from './components/layout/ScrollToTop';

const Home         = lazy(() => import('./pages/home/index'));
const About        = lazy(() => import('./pages/about2/index'));
const LegalNotice  = lazy(() => import('./pages/legal-notice/index'));
const PrivacyPolicy= lazy(() => import('./pages/privacy-policy/index'));
const OffreAvril   = lazy(() => import('./pages/offre-avril/index'));
const Coaching     = lazy(() => import('./pages/coaching/index'));
const Booking      = lazy(() => import('./pages/booking/index'));
const AboutNew     = lazy(() => import('./pages/about/index'));
const Contact      = lazy(() => import('./pages/contact/index'));
const NotFound     = lazy(() => import('./pages/notfound/index'));

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <ScrollToTop />
      <PromoBanner />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/about2"            element={<About />} />
          <Route path="/legal-notice"      element={<LegalNotice />} />
          <Route path="/privacy-policy"    element={<PrivacyPolicy />} />
          <Route path="/offre-avril"       element={<OffreAvril />} />
          <Route path="/en/april-offer"    element={<OffreAvril />} />
          <Route path="/coaching"          element={<Coaching />} />
          <Route path="/en/work-with-me"   element={<Coaching />} />
          <Route path="/booking"           element={<Booking />} />
          <Route path="/en/book"           element={<Booking />} />
          <Route path="/a-propos"          element={<AboutNew />} />
          <Route path="/en/about"          element={<AboutNew />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="/en/contact"        element={<Contact />} />
          <Route path="*"                  element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
