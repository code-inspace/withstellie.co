import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC<{ data?: any, lang: string }> = ({ data = {}, lang }) => {
  const container = useRef<HTMLElement>(null);
  const testimonials = data?.list || [];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.t-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.t-card', { opacity: 0, scale: 0.95, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="light" className="py-20 px-6 md:px-16 bg-[#EDE7DF]">
      <div className="max-w-5xl mx-auto">
        <h2 className="t-title opacity-0 font-display text-4xl md:text-5xl text-center text-[#2A1A0E] mb-14 italic">
          {data[`title_${lang}`]}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {testimonials.map((testi: any, i: number) => (
            <div key={i} className="t-card opacity-0 bg-white rounded-[2rem] p-8 shadow-xl border border-[#2A1A0E]/5 relative flex flex-col">
              <Quote className="text-[#C24C2A] w-8 h-8 opacity-30 mb-5" />
              <p className="font-display text-2xl md:text-3xl leading-relaxed mb-8 text-[#2A1A0E]/90 italic flex-grow">
                "{testi[`quote_${lang}`] || testi.quote_fr}"
              </p>
              <div className="border-t border-[#2A1A0E]/10 pt-4">
                <p className="text-base font-medium text-[#C24C2A]">
                  {testi[`author_${lang}`] || testi.author_fr}
                </p>
                <p className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mt-1">
                  {testi[`role_${lang}`] || testi.role_fr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
