import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const S03About: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax on the photo
    gsap.to('.about2-img-inner', {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Text reveal
    gsap.fromTo('.about2-text > *',
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left: Photo with parallax */}
      <div ref={imgRef} className="w-full md:w-1/2 relative bg-[#1A0000] min-h-[50vh] md:min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[#8B2500]/30 mix-blend-multiply z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1600&auto=format&fit=crop"
          alt="Stellie lifestyle"
          className="about2-img-inner absolute inset-0 w-full h-[130%] object-cover grayscale-[10%] brightness-[0.7]"
          style={{ top: '-15%' }}
        />
      </div>

      {/* Right: Text block on Ardent */}
      <div className="w-full md:w-1/2 bg-[#F5E6D0] flex items-center px-10 md:px-16 py-24">
        <div className="about2-text max-w-md">
          <span className="text-[#8B2500] uppercase tracking-[0.4em] text-xs font-bold mb-8 block">
            Qui suis-je
          </span>

          <h2 className="font-display text-[#1A0000] text-5xl md:text-6xl leading-[0.9] mb-8 tracking-tight">
            Je suis <em className="text-[#DA7134]">Stellie.</em>
          </h2>

          <p className="text-[#1A0000]/80 text-lg leading-relaxed mb-6 font-light">
            Je ne suis pas là pour te guérir. Je suis là pour tenir l'espace pendant que tu te rappelles qui tu es.
          </p>

          <p className="text-[#1A0000]/70 leading-relaxed mb-10 font-light">
            Chaque femme que j'accompagne porte déjà la réponse. Mon rôle, c'est d'aider son corps à la dire.
          </p>

          <a
            href="/about"
            className="inline-flex items-center gap-3 text-[#8B2500] text-sm uppercase tracking-[0.2em] font-medium border-b border-[#8B2500]/40 pb-1 hover:border-[#8B2500] transition-all group"
          >
            En savoir plus sur Stellie
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
