import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home3 from './pages/home3/Home3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
