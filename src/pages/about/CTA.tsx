import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 80%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.cta-content', { opacity: 0, scale: 0.95, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-4xl mx-auto cta-content bg-[#C24C2A] text-[#F5EDE0] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2A1A0E]/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

        <h2 className="font-display text-5xl md:text-7xl mb-12 relative z-10">
          Prête à shifter ?
        </h2>
        
        <p className="text-2xl md:text-3xl font-light italic mb-16 relative z-10 opacity-90 leading-relaxed">
          Tu n'as pas besoin d'avoir tout compris.<br/>
          Tu n'as pas besoin d'être prête à 100%.<br/>
          <span className="font-medium not-italic mt-6 block text-[#F5EDE0]">Tu as juste besoin de te dire oui.</span>
        </p>
        
        <div className="relative z-10 flex flex-col items-center">
          <a href="/reserver" className="bg-[#F5EDE0] text-[#2A1A0E] px-10 py-5 rounded-full flex items-center justify-center gap-4 font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#2A1A0E] hover:text-[#F5EDE0] hover:scale-105 group mb-8 shadow-xl">
            Réserver mon appel découverte gratuit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-sm uppercase tracking-[0.2em] font-medium text-[#F5EDE0]/60 flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span>30 minutes</span>
            <span className="hidden md:inline">·</span>
            <span>Gratuit</span>
            <span className="hidden md:inline">·</span>
            <span>Sans engagement</span>
          </p>
        </div>
      </div>
    </section>
  );
};
