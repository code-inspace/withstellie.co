import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { urlFor } from '../../lib/sanity';

import { Link } from 'react-router-dom';

export const Hero: React.FC<{ data?: any, lang: string }> = ({ data = {}, lang }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo('.h2-bg', { scale: 1.05 }, { scale: 1, duration: 2, ease: 'power2.out' })
      .fromTo('.h2-eye', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=1')
      .fromTo('.h2-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' }, '-=0.8')
      .fromTo('.h2-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
      .fromTo('.h2-btn', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.6');
  }, { scope: container });

  const eyebrow = data[`eyebrow_${lang}`];
  const h1 = data[`h1_${lang}`];
  const subtitle = data[`subtitle_${lang}`];
  const cta = data[`cta_${lang}`];
  const bgImg = data.backgroundImage ? urlFor(data.backgroundImage).url() : "/hero2.png";

  return (
    <section ref={container} data-navbar-theme="dark" className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-[#2A1A0E] rounded-b-[3rem] shadow-2xl z-10 px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#2A1A0E]/70 z-10"></div>
        <img src={bgImg} alt="Hero background" className="h2-bg w-full h-full object-cover opacity-60" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center text-[#F5EDE0] pt-24">
        <p className="h2-eye opacity-0 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C24C2A] mb-8">
          {eyebrow}
        </p>
        
        <h1 className="h2-title opacity-0 font-display text-5xl md:text-7xl lg:text-[7rem] leading-[1.05] tracking-tight mb-8 whitespace-pre-line">
          {h1}
        </h1>

        <p className="h2-sub opacity-0 text-lg md:text-xl font-light text-[#F5EDE0]/70 max-w-2xl mx-auto mb-16 leading-relaxed whitespace-pre-line">
          {subtitle}
        </p>

        <Link to="/booking" className="h2-btn opacity-0 inline-flex items-center gap-4 bg-[#C24C2A] text-white px-10 py-5 rounded-full uppercase tracking-widest text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#2A1A0E] hover:scale-105 group">
          {cta}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
