import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const S06CTA: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo('.c2-bg',
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
    )
    .fromTo('.c2-content > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' },
      '-=1'
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 px-6 md:px-12 bg-[#040D18] relative flex justify-center items-center isolate">
      <div className="c2-bg absolute inset-0 mx-4 md:mx-12 my-12 rounded-[3rem] -z-10 overflow-hidden bg-[#0A1F2E] border border-[#4ABBC8]/15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#4ABBC8]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="c2-content container mx-auto text-center max-w-3xl flex flex-col items-center py-20">
        <h2 className="text-5xl md:text-7xl font-display text-[#EAF4F7] mb-8">Prête à te retrouver ?</h2>

        <p className="text-xl md:text-2xl font-light text-[#B8D8E0]/70 mb-12">
          Tu n'as pas besoin d'avoir tout compris. Tu as juste besoin de te dire oui.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href="/reserver"
            className="px-12 py-5 bg-[#4ABBC8] text-[#040D18] font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#7ECCD8] transition-colors duration-300"
            style={{ boxShadow: '0 0 40px rgba(74,187,200,0.3), 0 0 80px rgba(74,187,200,0.1)' }}
          >
            Réserver mon appel découverte
          </a>

          <p className="text-sm font-medium tracking-widest uppercase text-[#7ECCD8]/40">
            Sans engagement · 30 minutes · Entièrement gratuit
          </p>
        </div>
      </div>
    </section>
  );
};
