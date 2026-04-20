import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { HomeReprogrammation } from '../../types/sanity';

export const Reprogrammation: React.FC<{ data?: HomeReprogrammation; lang?: string }> = ({ data, lang = 'fr' }) => {
  const d = data as Record<string, string> | undefined;
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { 
        trigger: container.current, 
        start: 'top 75%', 
        toggleActions: 'play none none reverse' 
      }
    });
    
    tl.fromTo('.r-title', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo('.r-subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo('.r-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, ease: 'power3.inOut' },
      '-=0.6'
    )
    .fromTo('.r-text', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }, 
      '-=1'
    );
  }, { scope: container });

  const isEn = lang === 'en';

  const content = {
    title: d?.[`title_${lang}`] || (isEn ? "Identity Reprogramming." : "La Reprogrammation Identitaire."),
    subtitle: d?.[`subtitle_${lang}`] || (isEn ? "A profound inner shift." : "Un shift intérieur profond."),
    text1: d?.[`text1_${lang}`] || (isEn 
      ? "Our identity is not static. It is the result of years of conditioning, beliefs, and experiences that have shaped our perception of ourselves and the world."
      : "Notre identité n'est pas statique. Elle est le fruit d'années de conditionnements, de croyances et d'expériences qui ont forgé notre perception de nous-même et du monde."),
    text2: d?.[`text2_${lang}`] || (isEn
      ? "Identity reprogramming is a profound process that consists of deconstructing limiting patterns to rebuild an identity aligned with your true desires. It's not about becoming someone else, but about removing layers of conditioning to reveal who you truly are."
      : "La reprogrammation identitaire est un processus profond qui consiste à déconstruire les schémas limitants pour reconstruire une identité alignée avec vos véritables désirs. Il ne s'agit pas de devenir quelqu'un d'autre, mais de retirer les couches de conditionnement pour révéler qui vous êtes vraiment."),
    text3: d?.[`text3_${lang}`] || (isEn
      ? "It is a total realignment of your Mind, Body, and Soul, allowing you to fully embody your power and manifest the life you deserve."
      : "C'est un réalignement total de votre Mind (esprit), Body (corps) et Soul (âme), vous permettant d'incarner pleinement votre puissance et de manifester la vie que vous méritez.")
  };

  return (
    <section ref={container} data-navbar-theme="light" className="pt-20 pb-16 md:pt-28 md:pb-24 px-6 md:px-12 bg-[#F9F3EC] text-[#2A1A0E] overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="r-title font-display text-4xl md:text-5xl lg:text-5xl mb-6">
          {content.title}
        </h2>
        <p className="r-subtitle text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-[#C24C2A] mb-10 md:mb-12">
          {content.subtitle}
        </p>
        
        <div className="r-line w-24 h-px bg-[#2A1A0E]/20 mx-auto mb-10 md:mb-12 origin-center"></div>
        
        <div className="space-y-8 text-lg md:text-xl font-light text-[#2A1A0E]/80 leading-relaxed max-w-3xl mx-auto">
          <p className="r-text">
            {content.text1}
          </p>
          <p className="r-text">
            {content.text2}
          </p>
          <p className="r-text font-medium text-[#C24C2A]">
            {content.text3}
          </p>
        </div>
      </div>
    </section>
  );
};
