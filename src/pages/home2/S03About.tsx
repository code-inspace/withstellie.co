import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const S03About: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo('.a2-image',
      { opacity: 0, scale: 0.9, rotate: -2 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.5, ease: 'power3.out' }
    )
    .fromTo('.a2-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=1'
    )
    .fromTo('.a2-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo('.a2-link',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 px-6 md:px-12 bg-[#040D18] relative">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="a2-image relative w-full max-w-md mx-auto md:max-w-none order-2 md:order-1">
          <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden relative"
               style={{ boxShadow: '0 20px 60px -20px rgba(74,187,200,0.25)' }}>
            <div className="absolute inset-0 bg-[#4ABBC8]/10 z-10 mix-blend-overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait de Stellie"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.8) saturate(0.9) hue-rotate(160deg)' }}
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="a2-title text-4xl md:text-5xl lg:text-6xl font-display text-[#EAF4F7] mb-10">
            Je suis Stellie.
          </h2>

          <div className="space-y-6 text-lg md:text-xl font-light text-[#B8D8E0]/80 leading-relaxed max-w-lg mb-12">
            <p className="a2-text">
              Je suis coach somatique. Je travaille avec des personnes qui savent être capables de plus, mais qui n'arrivent plus à s'entendre.
            </p>
            <p className="a2-text">
              Je ne suis pas là pour te dire qui être. Je suis là pour t'aider à retrouver ce que tu sais déjà.
            </p>
          </div>

          <a href="/about" className="a2-link inline-flex items-center gap-4 text-[#4ABBC8] hover:text-[#7ECCD8] uppercase tracking-widest text-sm font-medium transition-colors group">
            En savoir plus sur mon parcours
            <span className="p-3 rounded-full border border-[#4ABBC8]/30 group-hover:bg-[#4ABBC8]/10 transition-all group-hover:translate-x-2 duration-300">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
