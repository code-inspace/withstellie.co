import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.c3-bg', { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' })
      .fromTo('.c3-content > *', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=1');
  }, { scope: container });

  return (
    <section
      ref={container}
      data-navbar-theme="dark"
      className="py-32 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] rounded-[3rem] mx-4 md:mx-8 my-16 shadow-2xl relative overflow-hidden"
    >
      {data?.backgroundImage?.asset?.url && (
        <>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${data.backgroundImage.asset.url})` }}
          />
          <div className="absolute inset-0 bg-[#2A1A0E]/80 mix-blend-multiply z-0" />
        </>
      )}
      
      {/* Glow subtil — identique aux autres sections sombres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#C24C2A]/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="c3-content max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-display text-[#F5EDE0] mb-8">
          {data?.[`title_${lang}`]}
        </h2>
        <p className="text-xl md:text-2xl font-light text-[#F5EDE0]/70 mb-12 whitespace-pre-line">
          {data?.[`body_${lang}`]}
        </p>
        <div className="flex flex-col items-center gap-6">
          <Link
            to="/booking"
            className="w-fit inline-flex items-center justify-center gap-3 md:gap-4 px-8 py-3 md:px-16 md:py-5 bg-[#C24C2A] text-[#F5EDE0] rounded-full font-medium uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#F5EDE0] hover:text-[#2A1A0E] hover:scale-105 shadow-md group"
          >
            {data?.[`cta_${lang}`]}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm font-medium tracking-widest uppercase text-[#F5EDE0]/40">
            {data?.[`subline_${lang}`]}
          </p>
        </div>
      </div>
    </section>
  );
};
