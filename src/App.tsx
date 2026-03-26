import { useLayoutEffect } from 'react';
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

function App() {
  
  // Custom cursor logic could go here if requested, 
  // but we keep the DOM clean for the cinematic experience.
  
  useLayoutEffect(() => {
    // Refresh ScrollTrigger instances when layout changes
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-eclipse text-ardent selection:bg-sunbeam selection:text-eclipse min-h-screen font-sans selection:bg-sunbeam selection:text-eclipse">
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

export default App;
