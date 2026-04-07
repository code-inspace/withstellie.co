import React, { useRef } from 'react';
import { SafeHTML } from '../../components/SafeHTML';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const TurningPoint: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.tp-overlay', { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .fromTo('.tp-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power3.out' }, '-=1');
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="dark" className="py-32 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] relative overflow-hidden rounded-[3rem] mx-4 md:mx-8 mb-12 shadow-2xl">
      {data?.backgroundImage?.asset?.url && (
        <>
          <img src={data.backgroundImage.asset.url} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-[#2A1A0E]/80 mix-blend-multiply z-0" />
        </>
      )}
      <div className="absolute inset-0 bg-[#C24C2A]/5 tp-overlay pointer-events-none" />
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#C24C2A]/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="tp-content font-display text-5xl md:text-6xl text-[#C24C2A] italic mb-16">
          {data?.[`title_${lang}`]}
        </h2>
        
        <p className="tp-content text-3xl md:text-5xl font-display leading-tight mb-12 whitespace-pre-line">
          {data?.[`text1_${lang}`]}
        </p>
        
        <p className="tp-content text-xl md:text-2xl font-light text-[#F5EDE0]/80 leading-relaxed mb-12 whitespace-pre-line">
          {data?.[`text2_${lang}`]}
        </p>
        
        <SafeHTML tag="p" className="tp-content text-2xl md:text-4xl font-light leading-relaxed mb-16 px-4" html={data?.[`text3_${lang}`] || ""} />
        
        <div className="tp-content inline-block border border-[#F5EDE0]/20 px-8 py-5 rounded-full backdrop-blur-sm">
          <p className="text-xl md:text-2xl font-medium tracking-wide text-[#F5EDE0] whitespace-pre-line">
            {data?.[`quote_${lang}`]}
          </p>
        </div>
      </div>
    </section>
  );
};
