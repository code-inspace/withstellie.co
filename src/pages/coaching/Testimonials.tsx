import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Pour la première fois, j'ai arrêté de me battre contre moi-même. Mon corps m'a enfin dit quelque chose de vrai.",
    author: "Inès, 28 ans",
    role: "chargée de projet en reconversion"
  },
  {
    quote: "Je pensais que j'avais juste besoin de motivation. Ce dont j'avais besoin, c'était de me réentendre. Le travail somatique a changé quelque chose que je n'arrivais pas à atteindre avec la tête seule.",
    author: "Camille, 31 ans",
    role: "après une rupture professionnelle"
  }
];

export const Testimonials: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 70%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.testi-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="dark" className="py-32 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] rounded-b-[3rem] mb-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="sr-only">{data?.[`title_${lang}`] || "Témoignages"}</h2>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {testimonials.map((testi, i) => (
            <div key={i} className="testi-card relative">
              <Quote className="text-[#C24C2A] w-16 h-16 opacity-30 mb-8" />
              <p className="font-display italic text-3xl md:text-5xl leading-tight mb-10 text-[#F5EDE0]">
                "{testi.quote}"
              </p>
              <div className="border-t border-[#F5EDE0]/10 pt-6">
                <p className="text-xl font-medium text-[#C24C2A]">{testi.author}</p>
                <p className="text-sm uppercase tracking-widest text-[#F5EDE0]/50 mt-3">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
