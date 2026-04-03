import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

export const StellieIntro: React.FC<{ data?: any, lang: string }> = ({ data = {}, lang }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.si-title', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.si-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  const title = data[`title_${lang}`] || "Je suis Stellie.";
  const text1 = data[`text1_${lang}`] || "J'ai passé près de 20 ans à devenir invisible pour survivre. À me rendre petite, adaptable, acceptable. Un jour, j'ai failli ne pas m'en sortir.";
  const text2 = data[`text2_${lang}`] || "Ce jour-là, j'ai compris que je ne voulais pas mourir. Je voulais que la douleur s'arrête. Je voulais vivre, mais autrement.";
  const text3 = data[`text3_${lang}`] || "Alors j'ai tout réappris. Qui j'étais vraiment, sous tout ce qu'on m'avait dit d'être.";
  const text4 = data[`text4_${lang}`] || "Aujourd'hui, je t'accompagne à faire ce chemin.\n<span class=\"text-[#C24C2A] italic\">Pas seule. Pas dans le silence.</span>";
  const cta = data[`cta_${lang}`] || "Lire mon histoire";

  return (
    <section ref={container} data-navbar-theme="light" className="py-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/3">
          <h2 className="si-title opacity-0 font-display text-5xl md:text-6xl text-[#2A1A0E] italic sticky top-32">
            {title}
          </h2>
        </div>
        <div className="md:w-2/3 space-y-10">
          <p className="si-text opacity-0 text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed whitespace-pre-line">
            {text1}
          </p>
          <p className="si-text opacity-0 text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed border-l-4 border-[#C24C2A] pl-8 py-2 bg-white/50 rounded-r-3xl pr-6 whitespace-pre-line">
            {text2}
          </p>
          <p className="si-text opacity-0 text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed whitespace-pre-line">
            {text3}
          </p>
          <div 
            className="si-text opacity-0 text-2xl md:text-3xl font-medium text-[#2A1A0E] leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: text4 }}
          />
          
          <div className="si-text opacity-0 pt-6">
            <Link to="/a-propos" className="inline-flex items-center gap-4 text-[#C24C2A] hover:text-[#2A1A0E] uppercase tracking-widest text-sm font-medium transition-colors group">
              {cta}
              <span className="p-3 rounded-full border border-[#C24C2A]/30 group-hover:bg-[#2A1A0E]/10 transition-all group-hover:translate-x-2 duration-300">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
