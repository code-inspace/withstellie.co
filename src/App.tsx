import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home3 from './pages/home3/index';
import About from './pages/about/index';
import MentionsLegales from './pages/mentions-legales/index';
import Confidentialite from './pages/confidentialite/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
