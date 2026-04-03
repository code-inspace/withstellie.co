import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const defaultCriteria = [
  "Tu fais tout bien, mais tu te sens étrangère à ta propre vie.",
  "Tu es en pleine transition et tu ne sais plus qui tu es dans tout ça.",
  "Tu portes une version de toi construite pour les autres, et tu commences à en avoir assez.",
  "Tu as déjà essayé de comprendre par toi-même, et tu sens qu'il te manque quelque chose pour vraiment avancer."
];

export const ForWho: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);
  const contentStr = data?.[`desc_${lang}`];
  const criteriaArray = contentStr ? contentStr.split('\n').filter(Boolean) : defaultCriteria;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 70%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.fw-title', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.fw-item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.5')
      .fromTo('.fw-conclusion', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }, '+=0.2');
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="dark" className="py-32 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/3">
          <h2 className="fw-title font-display text-5xl md:text-6xl text-[#F5EDE0] mb-8 sticky top-32">
            {data?.[`title_${lang}`] || "C'est pour toi si..."}
          </h2>
        </div>
        <div className="md:w-2/3">
          <div className="space-y-12 mb-20">
            {criteriaArray.map((item: string, i: number) => (
              <div key={i} className="fw-item flex items-start gap-8 group">
                <div className="w-2 h-2 mt-4 rounded-full bg-[#C24C2A] shrink-0 transition-transform duration-300 group-hover:scale-150" />
                <p className="text-2xl md:text-3xl font-light text-[#F5EDE0]/80 leading-relaxed group-hover:text-[#F5EDE0] transition-colors duration-300">{item}</p>
              </div>
            ))}
          </div>
          <div className="fw-conclusion p-10 rounded-3xl bg-[#F5EDE0] text-[#2A1A0E] text-center">
            <p className="text-xl md:text-2xl font-display italic leading-relaxed">
              {data?.[`subtitle_${lang}`] || "Tu n'as pas besoin d'être en crise. Tu as juste besoin d'être prête à regarder honnêtement."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
