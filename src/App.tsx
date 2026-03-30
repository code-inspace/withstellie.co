import { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home2 from './pages/home2/Home2';
import Home3 from './pages/home3/Home3';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Hook } from './components/sections/Hook';
import { About } from './components/sections/About';
import { Method } from './components/sections/Method';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-sand text-earth selection:bg-terracotta/20 selection:text-rust min-h-screen font-sans">
      <Navbar />
      <main className="w-full relative z-10 overflow-hidden">
        <Hero />
        <Hook />
        <About />
        <Method />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
