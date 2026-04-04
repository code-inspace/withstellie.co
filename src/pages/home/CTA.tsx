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
    <section ref={container} data-navbar-theme="light" className="py-32 px-6 md:px-12 bg-[#F9F3EC] relative flex justify-center items-center isolate">
      <div className="c3-bg absolute inset-0 mx-4 md:mx-12 my-12 bg-[#2A1A0E] rounded-[3rem] -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#C24C2A]/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="c3-content container mx-auto text-center max-w-3xl flex flex-col items-center py-20 px-6 md:px-10">
        <h2 className="text-5xl md:text-7xl font-display text-[#F5EDE0] mb-8">
          {data?.[`title_${lang}`]}
        </h2>
        <p className="text-xl md:text-2xl font-light text-[#F5EDE0]/70 mb-12 whitespace-pre-line">
          {data?.[`body_${lang}`]}
        </p>
        <div className="flex flex-col items-center gap-6">
          <Link
            to="/booking"
            className="w-fit inline-flex items-center justify-center gap-4 px-16 py-5 bg-[#C24C2A] text-[#F5EDE0] rounded-full font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#F5EDE0] hover:text-[#2A1A0E] hover:scale-105 shadow-md group"
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
