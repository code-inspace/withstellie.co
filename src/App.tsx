import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home3 from './pages/home3/index';
import About from './pages/about/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
