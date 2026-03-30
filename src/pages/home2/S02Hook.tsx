import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const S02Hook: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo('.h2-line',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.25, ease: 'power3.out' }
    )
    .fromTo('.h2-quote',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('.h2-author',
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      '-=0.5'
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative py-32 px-6 md:px-12 bg-[#040D18] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,#0E3D5A_0%,transparent_70%)] opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center flex flex-col items-center relative z-10">
        <div className="space-y-4 md:space-y-6 text-2xl md:text-4xl lg:text-5xl font-light mb-20 tracking-wide text-[#EAF4F7]">
          <p className="h2-line">Tu travailles dur.</p>
          <p className="h2-line">Tu fais tout bien.</p>
          <p className="h2-line">Tu coches toutes les cases.</p>
          <p className="h2-line font-display italic text-[#4ABBC8] mt-8 pt-4"
             style={{ textShadow: '0 0 40px rgba(74,187,200,0.3)' }}>
            Et pourtant, quelque chose en toi ne se sent pas à sa place.
          </p>
        </div>

        <div className="w-px h-16 bg-[#4ABBC8]/30 mb-16" />

        <blockquote className="h2-quote text-3xl md:text-4xl font-display italic leading-tight text-[#EAF4F7] mb-8 max-w-3xl">
          "L'identité, ce n'est pas ce qu'on t'a dit d'être. C'est ce que tu choisis de devenir, un souffle à la fois."
        </blockquote>

        <p className="h2-author font-medium tracking-widest text-sm uppercase text-[#7ECCD8]/60 flex items-center gap-4">
          <span className="w-6 h-[1px] bg-[#4ABBC8]"></span>
          Stellie
          <span className="w-6 h-[1px] bg-[#4ABBC8]"></span>
        </p>
      </div>
    </section>
  );
};
