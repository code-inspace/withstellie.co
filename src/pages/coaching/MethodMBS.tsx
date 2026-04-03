import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const dimensions = [
  {
    title: 'Mind',
    desc: 'On commence par le mental. Les croyances qui tournent en boucle. Les schémas que tu répètes sans savoir pourquoi. Avec les neurosciences et la PNL, on comprend comment ton cerveau a appris à fonctionner, et on lui apprend autre chose.'
  },
  {
    title: 'Body',
    desc: 'Le corps garde tout ce que la tête essaie d\'oublier. Le travail somatique et l\'EFT permettent de libérer ce qui est stocké là, dans les muscles, dans la respiration, dans les sensations. Pas juste d\'en parler. De le traverser.'
  },
  {
    title: 'Soul',
    desc: 'Quand le mental se calme et que le corps relâche, quelque chose d\'autre émerge. Le yoga et les pratiques d\'introspection t\'aident à retrouver ton centre. Pas une direction que je t\'impose. La tienne.'
  }
];

export const MethodMBS: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 65%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.mbs-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.mbs-intro', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
      .fromTo('.mbs-card', { opacity: 0, y: 60, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.4')
      .fromTo('.mbs-footer', { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1 }, '-=0.2');
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="dark" className="py-32 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="mbs-title font-display text-5xl md:text-7xl mb-8">{data?.[`title_${lang}`] || 'Comment je travaille'}</h2>
          <p className="mbs-intro text-xl md:text-2xl font-light text-[#F5EDE0]/80 max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
            {data?.[`subtitle_${lang}`] || "Je n'applique pas une formule. Je construis quelque chose avec toi, à partir de là où tu en es.\nMa méthode repose sur trois dimensions. Pas parce que c'est joli sur le papier, mais parce que c'est comme ça que le changement tient vraiment."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {dimensions.map((dim, i) => (
            <div key={i} className="mbs-card bg-[#F5EDE0]/5 rounded-[2rem] p-10 md:p-12 hover:bg-[#F5EDE0]/10 transition-colors duration-500">
              <h3 className="font-display italic text-5xl text-[#C24C2A] mb-8">{dim.title}</h3>
              <p className="text-lg leading-relaxed font-light text-[#F5EDE0]/70">{dim.desc}</p>
            </div>
          ))}
        </div>

        <div className="mbs-footer text-center mt-16 pb-8 border-b border-[#F5EDE0]/10">
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-[#F5EDE0]/40">
            Neurosciences <span className="text-[#C24C2A] mx-2">·</span> PNL <span className="text-[#C24C2A] mx-2">·</span> Somatique <span className="text-[#C24C2A] mx-2">·</span> EFT <span className="text-[#C24C2A] mx-2">·</span> Yoga
          </p>
        </div>
      </div>
    </section>
  );
};
