import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Reconstruction: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.recon-title', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.recon-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  return (
    <section data-navbar-theme="light" ref={container} className="py-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-16 md:gap-24">
        <div className="md:w-1/3 text-left md:text-right">
          <h2 className="recon-title font-display text-5xl md:text-6xl text-[#2A1A0E] italic sticky top-32">
            {data?.[`title_${lang}`] || "La reconstruction"}
          </h2>
        </div>
        <div className="md:w-2/3 space-y-10">
          <p className="recon-text text-3xl md:text-4xl font-display text-[#C24C2A] mb-8 whitespace-pre-line">
            {data?.[`subtitle_${lang}`] || "J'ai choisi de recommencer."}
          </p>
          <p className="recon-text text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed whitespace-pre-line">
            {data?.[`text1_${lang}`] || "Pas de reconstruire la même chose en mieux. De tout défaire, et de voir ce qu'il y avait en dessous. Qui j'étais vraiment, sous tout ce qu'on m'avait dit d'être."}
          </p>
          <p className="recon-text text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#2A1A0E]/5 my-8 whitespace-pre-line">
            {data?.[`text2_${lang}`] || "J'ai commencé à voyager, à vivre autrement, à me permettre d'exister sans avoir à me justifier. J'ai étudié les neurosciences, la PNL, les pratiques somatiques, l'EFT, le yoga. Pas pour accumuler des outils. Pour comprendre comment on se construit, et comment on peut se reconstruire autrement."}
          </p>
          <p className="recon-text text-2xl md:text-3xl font-medium text-[#2A1A0E] leading-relaxed border-l-4 border-[#C24C2A] pl-8 py-2 mt-8">
            {data?.[`text3_${lang}`] || "J'ai reconstruit mon identité à partir de zéro."}<br/>
            <span className="font-light text-[#2A1A0E]/60 text-xl md:text-2xl block mt-4">{data?.[`text4_${lang}`] || "Et c'est le travail le plus difficile et le plus libérateur que j'aie jamais fait."}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
