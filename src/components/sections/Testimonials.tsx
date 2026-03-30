import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const testimonials = [
  {
    quote: "Pour la première fois, j'ai arrêté de me battre contre moi-même. Mon corps m'a enfin dit quelque chose de vrai.",
    author: "Inès",
    age: "28 ans",
    role: "chargée de projet en reconversion"
  },
  {
    quote: "Je pensais que j'avais juste besoin de motivation. Ce dont j'avais besoin, c'était de me réentendre.",
    author: "Camille",
    age: "31 ans",
    role: "après une rupture professionnelle"
  }
];

export const Testimonials: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".testi-card",
      { opacity: 0, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 md:px-12 relative overflow-hidden bg-white/40">
      <div className="container mx-auto max-w-6xl">
        <h2 className="testi-card font-display text-4xl md:text-5xl text-[#1a1a1a] mb-16">Des voix qui ont osé se retrouver.</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
        {testimonials.map((t, i) => (
          <div 
            key={i}
            className="testi-card border border-[#1a1a1a]/10 rounded-[3rem] p-10 md:p-14 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-500 relative flex flex-col shadow-sm"
          >
            {/* Quote decoration */}
            <span className="absolute top-10 right-10 text-[6rem] font-display text-aura/10 leading-none">"</span>
            
            <p className="text-2xl md:text-3xl font-display font-normal italic leading-tight text-[#1a1a1a] mb-12 relative z-10 text-balance">
              {t.quote}
            </p>
            
            <div className="mt-auto border-t border-[#1a1a1a]/10 pt-6">
              <p className="font-medium text-sunbeam flex items-center gap-3">
                <span className="w-4 h-[1px] bg-sunbeam"></span>
                {t.author}, {t.age}
              </p>
              <p className="text-sm font-light text-[#1a1a1a]/60 mt-1 pl-7">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
