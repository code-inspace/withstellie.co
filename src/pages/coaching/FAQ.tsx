import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqList = data?.list || [];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.faq-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.faq-item', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section data-navbar-theme="light" ref={container} className="py-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-3xl mx-auto">
        <h2 className="faq-title font-display text-5xl md:text-6xl text-center text-[#2A1A0E] mb-16">
          {data?.[`title_${lang}`]}
        </h2>

        <div className="space-y-4">
          {faqList.map((faq: any, i: number) => (
            <div
              key={i}
              className="faq-item border-b border-[#2A1A0E]/10"
            >
              <button
                onClick={() => toggleOpen(i)}
                className="w-full text-left py-6 flex justify-between items-center group"
              >
                <span className={`text-xl font-medium transition-colors duration-300 ${openIndex === i ? 'text-[#C24C2A]' : 'text-[#2A1A0E] group-hover:text-[#C24C2A]'}`}>
                  {faq[`q_${lang}`]}
                </span>
                <ChevronDown
                  className={`text-[#2A1A0E]/40 transition-transform duration-300 shrink-0 ml-4 ${openIndex === i ? 'rotate-180 text-[#C24C2A]' : ''}`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-lg font-light text-[#2A1A0E]/70 leading-relaxed pl-4 border-l-2 border-[#C24C2A]/30">
                  {faq[`a_${lang}`]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
