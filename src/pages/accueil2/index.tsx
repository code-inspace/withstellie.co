import React, { useEffect } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Hero } from './Hero';
import { StellieIntro } from './StellieIntro';
import { Method } from './Method';
import { Testimonials } from './Testimonials';
import { CTA } from './CTA';

const Accueil2: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      <Hero />
      <StellieIntro />
      <Method />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Accueil2;
