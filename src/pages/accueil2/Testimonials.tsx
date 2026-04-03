import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Pour la première fois, j'ai arrêté de me battre contre moi-même. Mon corps m'a enfin dit quelque chose de vrai.",
    author: "Inès, 28 ans",
    role: "en reconversion"
  },
  {
    quote: "Je pensais que j'avais juste besoin de motivation. Ce dont j'avais besoin, c'était de me réentendre.",
    author: "Camille, 31 ans",
    role: "après une rupture professionnelle"
  }
];

export const Testimonials: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.t-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.t-card', { opacity: 0, scale: 0.95, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  return (
    <section data-navbar-theme="light" ref={container} className="py-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-6xl mx-auto">
        <h2 className="t-title opacity-0 font-display text-5xl md:text-6xl text-center text-[#2A1A0E] mb-20 italic">
          Ce qu'elles en disent
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((testi, i) => (
            <div key={i} className="t-card opacity-0 bg-white rounded-[2.5rem] p-12 shadow-xl border border-[#2A1A0E]/5 relative flex flex-col">
              <Quote className="text-[#C24C2A] w-12 h-12 opacity-30 mb-8" />
              <p className="font-display text-3xl md:text-4xl leading-relaxed mb-12 text-[#2A1A0E]/90 italic flex-grow">
                "{testi.quote}"
              </p>
              <div className="border-t border-[#2A1A0E]/10 pt-6">
                <p className="text-lg font-medium text-[#C24C2A]">{testi.author}</p>
                <p className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mt-2">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
