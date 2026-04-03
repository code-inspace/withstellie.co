import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, AtSign } from 'lucide-react';

export const Alternatives: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 85%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.alt-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section ref={container} className="pb-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-3xl mx-auto alt-content text-center">
        <h2 className="font-display text-4xl mb-12 text-[#2A1A0E] italic">Tu préfères passer par les réseaux ?</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href="https://instagram.com/shift.withstellie" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white px-8 py-5 rounded-full shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
            <AtSign className="text-[#C24C2A] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[#2A1A0E]">@shift.withstellie</span>
          </a>
          <a href="mailto:chrystelbrc.pro@gmail.com" className="flex items-center gap-4 bg-white px-8 py-5 rounded-full shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
            <Mail className="text-[#C24C2A] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[#2A1A0E]">chrystelbrc.pro@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
