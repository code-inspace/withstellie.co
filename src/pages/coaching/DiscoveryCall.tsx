import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

export const DiscoveryCall: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 80%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.dc-content', { opacity: 0, scale: 0.95, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section data-navbar-theme="light" ref={container} className="py-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-4xl mx-auto dc-content bg-[#F4E8D9] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-sm">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
        
        <h2 className="font-display text-5xl md:text-6xl text-[#2A1A0E] mb-8 relative z-10">
          {data?.[`title_${lang}`] || "Pas sûre de laquelle choisir ?"}
        </h2>
        
        <p className="text-2xl font-light text-[#C24C2A] italic mb-6 relative z-10">
          C'est ok. Tu n'as pas besoin de savoir tout de suite.
        </p>
        
        <p className="text-lg md:text-xl text-[#2A1A0E]/70 font-light max-w-2xl mx-auto leading-relaxed mb-12 relative z-10 whitespace-pre-line">
          {data?.[`desc_${lang}`] || "L'appel découverte est là pour ça. On parle de ta situation, de ce que tu traverses, et on trouve ensemble ce qui a le plus de sens pour toi. Aucun engagement, aucune pression."}
        </p>
        
        <div className="relative z-10 flex flex-col items-center">
          <button className="bg-[#2A1A0E] text-white px-10 py-5 rounded-full flex items-center justify-center gap-4 font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#C24C2A] hover:scale-105 group mb-6 shadow-xl shadow-[#2A1A0E]/20">
            {data?.[`cta_${lang}`] || "Commençons"}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#2A1A0E]/50">
            Appel de 30 minutes <span className="mx-2">·</span> Gratuit <span className="mx-2">·</span> Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};
