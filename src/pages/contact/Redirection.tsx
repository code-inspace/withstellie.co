import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

export const Redirection: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 90%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.redir-content', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section data-navbar-theme="light" ref={container} className="pb-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-4xl mx-auto redir-content bg-[#C24C2A] text-[#F5EDE0] rounded-[3rem] p-12 md:p-16 text-center shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <h2 className="font-display text-3xl md:text-5xl mb-10 relative z-10 whitespace-pre-line">
          {data?.[`title_${lang}`]}
        </h2>

        <Link to="/booking" className="inline-flex items-center gap-4 bg-[#F5EDE0] text-[#2A1A0E] hover:bg-[#2A1A0E] hover:text-[#F5EDE0] px-10 py-5 rounded-full uppercase tracking-widest text-sm font-medium transition-all duration-300 hover:scale-105 group relative z-10 shadow-lg">
          {data?.[`cta_${lang}`]}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
