import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CTAOriginal: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.c3-bg', { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' })
      .fromTo('.c3-content > *', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=1');
  }, { scope: container });

  return (
    <section ref={container} className="py-32 px-6 md:px-12 bg-[#F9F3EC] relative flex justify-center items-center isolate">
      <div className="c3-bg absolute inset-0 mx-4 md:mx-12 my-12 bg-[#2A1A0E] rounded-[3rem] -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#C85A3A]/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="c3-content container mx-auto text-center max-w-3xl flex flex-col items-center py-20">
        <h2 className="text-5xl md:text-7xl font-sans text-[#F5EDE0] mb-8">Prête à te retrouver ?</h2>
        <p className="text-xl md:text-2xl font-light text-[#F5EDE0]/70 mb-12">
          Tu n'as pas besoin d'avoir tout compris. Tu as juste besoin de te dire oui.
        </p>
        <div className="flex flex-col items-center gap-6">
          <a
            href="/reserver"
            className="px-10 py-4 bg-[#C85A3A] text-[#F5EDE0] rounded-full font-medium hover:bg-[#D96A48] transition-colors duration-300 shadow-xl shadow-[#C85A3A]/20"
          >
            Réserver mon appel découverte
          </a>
          <p className="text-sm font-medium tracking-widest uppercase text-[#F5EDE0]/40">
            Sans engagement · 30 minutes · Entièrement gratuit
          </p>
        </div>
      </div>
    </section>
  );
};
