import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const methods = [
  { name: 'Neurosciences', desc: 'comprendre comment ton cerveau a appris à fonctionner, et créer de nouveaux chemins.' },
  { name: 'PNL', desc: 'travailler sur les croyances et les schémas qui te limitent sans que tu t\'en rendes compte.' },
  { name: 'Somatique', desc: 'libérer ce que le corps porte, pas juste en parler.' },
  { name: 'EFT', desc: 'travailler sur les blocages émotionnels ancrés profondément.' },
  { name: 'Yoga', desc: 'retrouver une relation au corps et à l\'instant présent, sans performance.' },
];

export const Method: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.meth-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.meth-item', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  return (
    <section data-navbar-theme="light" ref={container} className="py-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 meth-title">
          <h2 className="font-display text-5xl md:text-6xl text-[#2A1A0E] mb-8">{data?.[`title_${lang}`] || "Comment je travaille"}</h2>
          <p className="text-2xl font-light text-[#C24C2A] italic mb-6">
            {data?.[`subtitle_${lang}`] || "Pas de solution toute faite. Pas de programme identique d'une personne à l'autre."}
          </p>
          <p className="text-xl text-[#2A1A0E]/70 font-light max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {data?.[`desc_${lang}`] || "Je combine plusieurs approches selon ce dont tu as besoin, là où tu en es."}
          </p>
        </div>

        <div className="space-y-6 mb-20">
          {methods.map((m, i) => (
            <div key={i} className="meth-item bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#2A1A0E]/5 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-md">
              <div className="text-2xl font-display italic text-[#C24C2A] md:min-w-[200px]">{m.name}</div>
              <div className="text-lg md:text-xl font-light text-[#2A1A0E]/70 leading-relaxed">{m.desc}</div>
            </div>
          ))}
        </div>

        <div className="meth-title text-center">
          <p className="text-2xl md:text-3xl font-display text-[#2A1A0E] bg-[#F4E8D9] inline-block px-12 py-8 rounded-[2rem] shadow-sm" dangerouslySetInnerHTML={{ __html: data?.[`cta_${lang}`] || "Tout est construit autour de toi. <span class=\"text-[#C24C2A] italic\">Toujours.</span>" }}></p>
        </div>
      </div>
    </section>
  );
};
