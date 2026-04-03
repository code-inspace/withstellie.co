import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home3 from './pages/home3/index';
import About from './pages/about/index';
import MentionsLegales from './pages/mentions-legales/index';
import Confidentialite from './pages/confidentialite/index';
import OffreAvril from './pages/offre-avril/index';
import { PromoBanner } from './components/layout/PromoBanner';

function App() {
  return (
    <BrowserRouter>
      <PromoBanner />
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/offre-avril" element={<OffreAvril />} />
        <Route path="/en/april-offer" element={<OffreAvril />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
