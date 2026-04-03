import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home3 from './pages/home3/index';
import About from './pages/about2/index';
import MentionsLegales from './pages/mentions-legales/index';
import Confidentialite from './pages/confidentialite/index';
import OffreAvril from './pages/offre-avril/index';
import Accompagnement from './pages/accompagnement/index';
import Reserver from './pages/reserver/index';
import AboutNew from './pages/about/index';
import Contact from './pages/contact/index';
import { PromoBanner } from './components/layout/PromoBanner';

function App() {
  return (
    <BrowserRouter>
      <PromoBanner />
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/about2" element={<About />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/offre-avril" element={<OffreAvril />} />
        <Route path="/en/april-offer" element={<OffreAvril />} />
        <Route path="/accompagnement" element={<Accompagnement />} />
        <Route path="/en/work-with-me" element={<Accompagnement />} />
        <Route path="/reserver" element={<Reserver />} />
        <Route path="/en/book" element={<Reserver />} />
        <Route path="/a-propos" element={<AboutNew />} />
        <Route path="/en/about" element={<AboutNew />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/en/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
