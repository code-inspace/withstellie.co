import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const S06CTA: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.cta2-content > *',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Slow rotating circle(s) — same as hero
    gsap.to('.cta2-circle-1', { rotation: 360, duration: 120, ease: 'linear', repeat: -1 });
    gsap.to('.cta2-circle-2', { rotation: -360, duration: 80, ease: 'linear', repeat: -1 });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#1A0000] overflow-hidden"
    >
      {/* Decorative rotating circles — visual loop with hero */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="cta2-circle-1 absolute w-[110vw] h-[110vw] opacity-10" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="185" fill="none" stroke="#DA7134" strokeWidth="0.6" strokeDasharray="6 14" />
        </svg>
        <svg className="cta2-circle-2 absolute w-[70vw] h-[70vw] opacity-10" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="170" fill="none" stroke="#E89154" strokeWidth="0.4" strokeDasharray="3 20" />
        </svg>
      </div>

      <div className="cta2-content relative z-10 max-w-2xl flex flex-col items-center">
        <span className="text-[#DA7134] uppercase tracking-[0.4em] text-xs font-bold mb-10 block">
          Prochaine étape
        </span>

        <h2 className="font-display text-[#F5EDE0] text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight mb-8">
          Prête à te<br /><em className="text-[#DA7134]">retrouver ?</em>
        </h2>

        <p className="text-[#F5EDE0]/50 text-sm uppercase tracking-[0.3em] mb-14">
          Sans engagement · 30 min · Entièrement gratuit
        </p>

        <a
          href="/reserver"
          className="inline-flex items-center gap-4 bg-[#DA7134] text-[#1A0000] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#E89154] transition-colors duration-300 shadow-[0_0_60px_rgba(218,113,52,0.35)]"
        >
          Réserver mon appel découverte
        </a>
      </div>
    </section>
  );
};
