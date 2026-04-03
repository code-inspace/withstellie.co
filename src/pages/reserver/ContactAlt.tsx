import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, AtSign } from 'lucide-react';

export const ContactAlt: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 85%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.alt-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section data-navbar-theme="light" ref={container} className="py-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-3xl mx-auto alt-content text-center bg-[#F4E8D9] rounded-[3rem] p-12 md:p-16 border border-[#2A1A0E]/5">
        <h2 className="font-display text-4xl md:text-5xl mb-6 text-[#2A1A0E]">Tu préfères écrire d'abord ?</h2>
        <p className="text-xl font-light text-[#2A1A0E]/70 mb-12">
          Pas de problème. Tu peux m'envoyer un message directement.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <a href="https://instagram.com/shift.withstellie" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white px-8 py-5 rounded-full shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
            <AtSign className="text-[#C24C2A] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[#2A1A0E]">@shift.withstellie</span>
          </a>
          <a href="mailto:chrystelbrc.pro@gmail.com" className="flex items-center gap-4 bg-white px-8 py-5 rounded-full shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
            <Mail className="text-[#C24C2A] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[#2A1A0E]">chrystelbrc.pro@gmail.com</span>
          </a>
        </div>

        <p className="text-sm uppercase tracking-widest font-medium text-[#2A1A0E]/40">
          Je réponds en général sous 24h.
        </p>
      </div>
    </section>
  );
};
