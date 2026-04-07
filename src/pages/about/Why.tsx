import React, { useRef } from 'react';
import { SafeHTML } from '../../components/SafeHTML';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Why: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.why-title', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' })
      .fromTo('.why-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  return (
    <section data-navbar-theme="light" ref={container} className="py-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="why-title font-display text-5xl md:text-6xl text-[#2A1A0E] mb-16">
          {data?.[`title_${lang}`]}
        </h2>
        
        <SafeHTML tag="p" className="why-text text-2xl md:text-3xl font-medium text-[#C24C2A] mb-12" html={data?.[`subtitle_${lang}`] || ""} />
        
        <p className="why-text text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed mb-12 whitespace-pre-line">
          {data?.[`text1_${lang}`]}
        </p>

        <p className="why-text text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed bg-[#F4E8D9] p-10 md:p-14 rounded-[2.5rem] whitespace-pre-line">
          {data?.[`text2_${lang}`]}
        </p>
      </div>
    </section>
  );
};
