import React, { useRef } from 'react';
import { SafeHTML } from '../../components/SafeHTML';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

export const Method: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);
  const cards = data?.cards || [];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 65%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.m3-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.m3-card', { opacity: 0, y: 60, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' }, '-=0.6');
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="light" className="py-32 px-6 md:px-12 bg-[#F9F3EC]">
      <div className="container mx-auto">
        <h2 className="m3-title text-5xl md:text-7xl font-display text-center mb-24 text-[#2A1A0E]">
          <SafeHTML html={data?.[`title_${lang}`]} />
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {cards.map((card: any, i: number) => (
            <div key={i} className="m3-card group bg-[#2A1A0E] text-[#F5EDE0] rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
              <div className="absolute -right-10 -top-10 text-[12rem] font-sans text-[#F5EDE0]/5 font-bold leading-none select-none pointer-events-none">
                {card.letter}
              </div>
              <div className="text-6xl font-display italic text-[#C24C2A] mb-6">{card.title}</div>
              <p className="text-lg leading-relaxed font-light mt-auto w-[90%] text-[#F5EDE0]/80">{card[`desc_${lang}`] || card.desc_fr}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/coaching" className="inline-flex items-center gap-4 text-[#2A1A0E] hover:text-[#C24C2A] uppercase tracking-widest text-sm font-medium transition-colors group">
            {data?.[`subtitle_${lang}`]}
            <span className="p-3 rounded-full border border-[#2A1A0E]/30 group-hover:bg-[#2A1A0E]/10 transition-all group-hover:translate-x-2 duration-300">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
