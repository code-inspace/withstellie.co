import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { ArrowLeft } from 'lucide-react';

import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 80%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.nf-404', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' })
      .fromTo('.nf-overlay', { opacity: 0 }, { opacity: 1, duration: 2 }, '-=1.2')
      .fromTo('.nf-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=1')
      .fromTo('.nf-btn', { opacity: 0, scale: 0.95, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.7)' }, '-=0.5');
  }, { scope: container });

  return (
    <div className="bg-[#F9F3EC] min-h-screen flex flex-col">
      <Navbar />
      <main ref={container} className="flex-grow flex items-center justify-center pt-40 pb-24 px-6 md:px-16" data-navbar-theme="light">
        <div className="max-w-4xl mx-auto text-center relative w-full">
          <div className="nf-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C24C2A]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <h1 className="nf-404 opacity-0 font-display text-[12rem] md:text-[20rem] lg:text-[24rem] text-[#2A1A0E]/5 leading-none select-none relative z-0 mb-4 select-none">
            404
          </h1>
          
          <div className="relative z-10 -mt-24 md:-mt-40 lg:-mt-48">
            <h2 className="nf-text opacity-0 font-display text-5xl md:text-7xl text-[#2A1A0E] mb-6">
              Tu t'es perdue en route.
            </h2>
            <p className="nf-text opacity-0 text-xl md:text-2xl font-light text-[#2A1A0E]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              L'espace que tu cherches n'existe pas ou a peut-être été déplacé.
            </p>
            
            <Link to="/" className="nf-btn opacity-0 inline-flex items-center gap-4 bg-[#2A1A0E] text-[#F5EDE0] px-10 py-5 rounded-full font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#C24C2A] hover:scale-105 shadow-xl group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Retourner à l'accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
