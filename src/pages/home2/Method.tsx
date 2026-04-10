import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Method: React.FC<{ data?: any, lang: string }> = ({ data = {}, lang }) => {
  const container = useRef<HTMLElement>(null);
  const cards = data?.cards || [];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 70%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.m-head', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.m-card', { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  const title = data[`title_${lang}`];
  const subtitle = data[`subtitle_${lang}`];
  const cta = data[`cta_${lang}`];

  return (
    <section ref={container} data-navbar-theme="dark" className="pt-32 pb-44 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] relative overflow-hidden">
      {data?.backgroundImage?.asset?.url && (
        <>
          <img src={data.backgroundImage.asset.url} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-[#2A1A0E]/80 mix-blend-multiply z-0" />
        </>
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 m-head opacity-0">
          <h2 className="font-display text-5xl md:text-7xl mb-8">{title}</h2>
          <p className="text-xl md:text-3xl font-light text-[#C24C2A] italic max-w-2xl mx-auto whitespace-pre-line">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {cards.map((card: any, i: number) => (
            <div key={i} className="m-card opacity-0 bg-[#F5EDE0]/5 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col transition-all duration-500 hover:bg-[#F5EDE0]/10 hover:-translate-y-2 border border-white/5">
              <div className="absolute -right-6 -top-10 text-[14rem] font-sans text-white/5 font-bold leading-none select-none pointer-events-none">
                {card.letter}
              </div>
              <div className="text-5xl font-display italic text-[#C24C2A] mb-8 relative z-10">{card.title}</div>
              <p className="text-lg leading-relaxed font-light mt-auto text-[#F5EDE0]/80 relative z-10">{card[`desc_${lang}`] || card.desc_fr}</p>
            </div>
          ))}
        </div>

        <div className="text-center m-head opacity-0">
          <Link to="/coaching" className="inline-flex items-center gap-4 text-[#F5EDE0] hover:text-[#C24C2A] uppercase tracking-widest text-sm font-medium transition-colors group">
            {cta}
            <span className="p-3 rounded-full border border-[#F5EDE0]/30 group-hover:bg-[#C24C2A] group-hover:border-transparent transition-all group-hover:translate-x-2 duration-300">
              <ArrowRight size={18} className="group-hover:text-[#F5EDE0]" />
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,30 C200,90 400,0 600,45 C800,90 1000,10 1200,50 C1310,72 1380,30 1440,20 L1440,110 L0,110 Z" fill="#EDE7DF" />
        </svg>
      </div>
    </section>
  );
};
