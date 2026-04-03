import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Quote: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.quote-text', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="dark" className="py-40 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] flex items-center justify-center rounded-[3rem] mx-4 md:mx-8 my-16 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C24C2A]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="quote-text font-display italic text-4xl md:text-5xl lg:text-7xl leading-tight">
          {data?.[`text1_${lang}`] || "\"L'identité, ce n'est pas ce qu'on t'a dit d'être."}<br/>
          <span className="text-[#C24C2A] block mt-8">{data?.[`text2_${lang}`] || "C'est ce que tu choisis de devenir, un souffle à la fois.\""}</span>
        </p>
      </div>
    </section>
  );
};
