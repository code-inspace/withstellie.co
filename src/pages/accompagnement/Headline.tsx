import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Headline: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 80%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.headline-text', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section ref={container} className="pt-48 pb-32 px-6 md:px-16 bg-[#F9F3EC]" data-navbar-theme="light">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="headline-text font-display text-6xl md:text-8xl lg:text-[7rem] text-[#2A1A0E] tracking-tight leading-[0.95] mb-10">
          Tout est personnalisé.<br />
          <span className="italic text-[#C24C2A] block mt-4">Chaque parcours est construit autour de toi.</span>
        </h1>
        <p className="headline-text text-xl md:text-2xl text-[#2A1A0E]/60 font-light tracking-wide">
          Places limitées pour un accompagnement plus profond et plus personnel.
        </p>
      </div>
    </section>
  );
};
