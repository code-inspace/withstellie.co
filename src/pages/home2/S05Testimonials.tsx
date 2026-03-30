import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'Pour la première fois, j\'ai arrêté de me battre contre moi-même. Mon corps m\'a enfin dit quelque chose de vrai.',
    name: 'Inès',
    context: '28 ans, chargée de projet en reconversion',
  },
  {
    quote: 'Je croyais que je devais tout gérer avec ma tête. Travailler avec Stellie m\'a appris à habiter mon corps différemment — doucement mais profondément.',
    name: 'Marion',
    context: '34 ans, entrepreneuse en burnout silencieux',
  },
];

export const S05Testimonials: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Gentle fade in
    gsap.fromTo('.testimonial-card',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Background color transition from Ardent → dark Aura on scroll
    ScrollTrigger.create({
      trigger: container.current,
      start: 'top 80%',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        const el = container.current;
        if (!el) return;
        // F5E6D0 → 1A0000
        const r = Math.round(245 - (245 - 26) * p * 0.6);
        const g = Math.round(230 - (230 - 0) * p * 0.6);
        const b = Math.round(208 - (208 - 0) * p * 0.6);
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
      }
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-[80vh] flex flex-col items-center justify-center py-32 px-6 overflow-hidden"
      style={{ backgroundColor: '#F5E6D0' }}
    >
      {/* Top label */}
      <span className="text-[#8B2500] uppercase tracking-[0.4em] text-xs font-bold mb-16 block text-center">
        Elles ont traversé
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card bg-white/40 backdrop-blur-sm border border-[#8B2500]/10 p-10 flex flex-col justify-between"
          >
            <blockquote className="font-display italic text-[#1A0000] text-xl md:text-2xl leading-[1.4] mb-10">
              "{t.quote}"
            </blockquote>
            <footer>
              <div className="w-8 h-px bg-[#8B2500]/40 mb-4"></div>
              <p className="text-[#8B2500] font-bold text-sm">{t.name}</p>
              <p className="text-[#1A0000]/50 text-xs mt-1">{t.context}</p>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};
