import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const HookOriginal: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.h3-hook-line',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.2, stagger: 0.25, ease: 'power3.out',
        scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 px-6 md:px-12 bg-[#F9F3EC]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-5 text-2xl md:text-4xl lg:text-5xl font-light text-[#2A1A0E] mb-16">
          <p className="h3-hook-line">Tu travailles dur.</p>
          <p className="h3-hook-line">Tu fais tout bien.</p>
          <p className="h3-hook-line">Tu coches toutes les cases.</p>
          <p className="h3-hook-line font-display italic text-[#C85A3A] mt-6 pt-4">
            Et pourtant, quelque chose en toi ne se sent pas à sa place.
          </p>
        </div>

        <div className="w-16 h-px bg-[#C85A3A]/40 mx-auto mb-16" />

        <blockquote className="h3-hook-line text-3xl md:text-4xl font-display italic leading-tight text-[#2A1A0E] mb-8 max-w-3xl mx-auto">
          "L'identité, ce n'est pas ce qu'on t'a dit d'être. C'est ce que tu choisis de devenir, un souffle à la fois."
        </blockquote>

        <p className="h3-hook-line text-sm uppercase tracking-widest text-[#C85A3A]/60 flex items-center justify-center gap-4">
          <span className="w-6 h-px bg-[#C85A3A]"></span>
          Stellie
          <span className="w-6 h-px bg-[#C85A3A]"></span>
        </p>
      </div>
    </section>
  );
};
