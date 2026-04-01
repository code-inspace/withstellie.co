import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Pour la première fois, j'ai arrêté de me battre contre moi-même. Mon corps m'a enfin dit quelque chose de vrai.",
    author: "Inès", age: "28 ans", role: "Chargée de projet en reconversion"
  },
  {
    quote: "Je pensais que j'avais juste besoin de motivation. Ce dont j'avais besoin, c'était de me réentendre.",
    author: "Camille", age: "31 ans", role: "Après une rupture professionnelle"
  },
  {
    quote: "Stellie m'a aidé à distinguer ce que je voulais vraiment de ce qu'on attendait de moi. C'est une différence qui change tout.",
    author: "Sasha", age: "34 ans", role: "En transition de carrière"
  },
  {
    quote: "Je suis arrivé·e épuisé·e et perdu·e. Je suis reparti·e avec une boussole intérieure que je ne savais pas que j'avais.",
    author: "Morgan", age: "29 ans", role: "Après un burn-out"
  }
];

export const Testimonials: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cardWidth = 50; // vw — 2 cards visible
    const totalScroll = (testimonials.length - 2) * cardWidth; // 2 cards * 50vw = 100vw

    gsap.to(track.current, {
      x: () => `-${totalScroll}vw`,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: () => `+=${totalScroll * window.innerWidth / 100}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    gsap.fromTo('.testi-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="light" className="bg-[#F9F3EC] overflow-hidden">
      <div className="h-screen flex flex-col">
        {/* Titre */}
        <div className="pt-24 pb-12 px-10 md:px-16 flex-shrink-0">
          <h2 className="testi-title font-display text-5xl md:text-7xl text-[#2A1A0E] text-center">
            Des voix qui ont osé se retrouver.
          </h2>
        </div>

        {/* Cartes horizontales */}
        <div className="flex-1 flex items-center overflow-hidden px-10 md:px-16">
          <div ref={track} className="flex gap-8 will-change-transform" style={{ width: `${testimonials.length * 50}vw` }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 border border-[#2A1A0E]/10 rounded-[3rem] p-10 md:p-14 bg-white/60 relative flex flex-col shadow-sm"
                style={{ width: 'calc(50vw - 2.5rem)' }}
              >
                <span className="absolute top-10 right-10 text-[6rem] font-display text-[#C24C2A]/10 leading-none">"</span>
                <p className="text-2xl md:text-3xl font-display font-normal italic leading-tight text-[#2A1A0E] mb-12 relative z-10">
                  {t.quote}
                </p>
                <div className="mt-auto border-t border-[#2A1A0E]/10 pt-6">
                  <p className="font-medium text-[#C24C2A] flex items-center gap-3">
                    <span className="w-4 h-px bg-[#C24C2A]"></span>
                    {t.author}, {t.age}
                  </p>
                  <p className="text-sm font-light text-[#2A1A0E]/50 mt-1 pl-7">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
