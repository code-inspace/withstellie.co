import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Headline: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 80%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.reserve-head', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="light" className="pt-48 pb-20 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="reserve-head font-display text-6xl md:text-8xl lg:text-[7rem] text-[#2A1A0E] tracking-tight leading-[0.95] mb-10" dangerouslySetInnerHTML={{ __html: data?.[`title_${lang}`] || "C'est juste une <span class=\"italic text-[#C24C2A] block mt-2\">conversation.</span>" }}></h1>
        <p className="reserve-head text-2xl md:text-3xl text-[#2A1A0E] font-light tracking-wide mb-6">
          {data?.[`subtitle_${lang}`] || "Pas un entretien. Pas un engagement."}
        </p>
        <p className="reserve-head text-xl md:text-2xl text-[#2A1A0E]/70 font-light max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
          {data?.[`text_${lang}`] || "Un espace pour se parler honnêtement, voir si on est alignées, et décider ensemble de la suite."}
        </p>
      </div>
    </section>
  );
};
