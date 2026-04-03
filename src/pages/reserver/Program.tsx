import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



export const Program: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.prog-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.prog-item', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }, '-=0.5')
      .fromTo('.prog-footer', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.2');
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="dark" className="py-24 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] rounded-[3rem] mx-4 md:mx-8 mb-20 shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="prog-title font-display text-4xl md:text-5xl text-center mb-20 text-[#C24C2A] italic">
          {data?.[`title_${lang}`] || "Ce qu'on fait pendant ces 30 minutes"}
        </h2>

        <div className="space-y-12 mb-20">
          {[
             data?.[`text1_${lang}`] || "On commence par toi.\nOù tu en es, ce que tu traverses, ce qui t'a amenée ici.",
             data?.[`text2_${lang}`] || "Je te présente comment je travaille,\nce que ça implique concrètement, et quel format pourrait avoir du sens pour ta situation.",
             data?.[`text3_${lang}`] || "On décide ensemble.\nSi c'est un oui des deux côtés, on construit la suite. Sinon, tu repars avec au moins une chose claire sur toi-même."
          ].map((stepText, i) => {
            const [title, ...descParts] = stepText.split('\n');
            const desc = descParts.join('\n');
            return (
            <div key={i} className="prog-item flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="text-4xl font-display text-[#F5EDE0]/20 font-bold shrink-0 mt-1">0{i + 1}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4 text-[#F5EDE0]">{title}</h3>
                <p className="text-lg md:text-xl font-light text-[#F5EDE0]/70 leading-relaxed whitespace-pre-line">{desc}</p>
              </div>
            </div>
            );
          })}
        </div>

        <div className="prog-footer text-center pt-10 border-t border-[#F5EDE0]/10">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] font-medium text-[#F5EDE0]/50 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0" dangerouslySetInnerHTML={{ __html: data?.[`subline_${lang}`] || "<span>30 minutes</span><span class=\"hidden md:inline mx-4 text-[#C24C2A]\">·</span><span>Visio</span><span class=\"hidden md:inline mx-4 text-[#C24C2A]\">·</span><span>Entièrement gratuit</span>" }}></p>
        </div>
      </div>
    </section>
  );
};
