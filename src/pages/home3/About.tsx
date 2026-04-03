import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const About: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 70%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.a3-img', { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' })
      .fromTo('.a3-text', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power2.out' }, '-=1');
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="light" className="py-32 px-6 md:px-12 bg-[#F9F3EC]">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="a3-img relative w-full max-w-md mx-auto md:max-w-none order-2 md:order-1">
          <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(200,90,58,0.2)]">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait de Stellie"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="a3-text text-4xl md:text-5xl lg:text-6xl font-sans text-[#2A1A0E] mb-10">
            {data?.[`title_${lang}`] || "Je suis Stellie."}
          </h2>
          <div className="space-y-6 text-lg font-light text-[#2A1A0E]/70 leading-relaxed max-w-lg mb-12">
            <p className="a3-text whitespace-pre-line">
              {data?.[`desc_${lang}`] || "Je suis coach somatique. Je travaille avec des personnes qui savent être capables de plus, mais qui n'arrivent plus à s'entendre.\n\nJe ne suis pas là pour te dire qui être. Je suis là pour t'aider à retrouver ce que tu sais déjà."}
            </p>
          </div>
          <a href="/about" className="a3-text inline-flex items-center gap-4 text-[#C24C2A] hover:text-[#D35C38] uppercase tracking-widest text-sm font-medium transition-colors group">
            {data?.[`cta_${lang}`] || "En savoir plus sur mon parcours"}
            <span className="p-3 rounded-full border border-[#C24C2A]/30 group-hover:bg-[#C24C2A]/10 transition-all group-hover:translate-x-2 duration-300">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
