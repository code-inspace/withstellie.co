import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Before: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.before-title', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.before-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  return (
    <section data-navbar-theme="light" ref={container} className="py-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/3">
          <h2 className="before-title font-display text-5xl md:text-6xl text-[#2A1A0E] sticky top-32">
            {data?.[`title_${lang}`]}
          </h2>
        </div>
        <div className="md:w-2/3 space-y-10">
          <p className="before-text text-2xl md:text-3xl font-light text-[#2A1A0E] leading-relaxed whitespace-pre-line">
            {data?.[`text1_${lang}`]}
          </p>
          <p className="before-text text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed whitespace-pre-line">
            {data?.[`text2_${lang}`]}
          </p>
          <p className="before-text text-xl md:text-2xl font-light text-[#2A1A0E] leading-relaxed border-l-2 border-[#C24C2A] pl-8 py-2 whitespace-pre-line">
            {data?.[`text3_${lang}`]}
          </p>
        </div>
      </div>
    </section>
  );
};
