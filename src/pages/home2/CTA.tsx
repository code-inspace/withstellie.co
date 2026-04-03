import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

export const CTA: React.FC<{ data?: any, lang: string }> = ({ data = {}, lang }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 80%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.c-content', { opacity: 0, scale: 0.95, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' });
  }, { scope: container });

  const title = data[`title_${lang}`] || "Prête à te retrouver ?";
  const text1 = data[`text1_${lang}`] || "Tu n'as pas besoin d'avoir tout compris.";
  const text2 = data[`text2_${lang}`] || "Tu n'as pas besoin d'être prête à 100%.";
  const text3 = data[`text3_${lang}`] || "Tu as juste besoin de te dire oui.";
  const cta = data[`cta_${lang}`] || "Travailler ensemble";
  const subline = data[`subline_${lang}`] || "Sans engagement · 30 minutes · Entièrement gratuit";

  return (
    <section ref={container} data-navbar-theme="light" className="pb-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-4xl mx-auto c-content opacity-0 bg-[#C24C2A] text-[#F5EDE0] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-1/3 -translate-y-1/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full translate-x-1/3 translate-y-1/4 blur-3xl pointer-events-none" />

        <h2 className="font-display text-5xl md:text-7xl mb-10 relative z-10 whitespace-pre-line">
          {title}
        </h2>
        
        <p className="text-2xl md:text-3xl font-light italic mb-14 relative z-10 opacity-90 leading-relaxed">
          <span className="block mb-2">{text1}</span>
          <span className="block mb-4">{text2}</span>
          <span className="font-medium not-italic mt-4 block text-white">{text3}</span>
        </p>
        
        <div className="relative z-10 flex flex-col items-center">
          <Link to="/booking" className="bg-[#F5EDE0] text-[#2A1A0E] px-12 py-5 rounded-full flex items-center justify-center gap-4 font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#2A1A0E] hover:text-[#F5EDE0] hover:scale-105 group mb-8 shadow-xl">
            {cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-white/70 whitespace-pre-line text-center flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            {subline.split('·').map((part: string, idx: number, arr: string[]) => (
              <React.Fragment key={idx}>
                <span>{part.trim()}</span>
                {idx < arr.length - 1 && <span className="hidden md:inline">·</span>}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
