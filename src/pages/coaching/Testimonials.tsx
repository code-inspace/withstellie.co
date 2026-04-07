import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);
  const testimonials = data?.list || [];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 70%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.testi-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: 'power3.out' });
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="dark" className="py-32 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] rounded-b-[3rem] mb-12 relative overflow-hidden">
      {data?.backgroundImage?.asset?.url && (
        <>
          <img src={data.backgroundImage.asset.url} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-[#2A1A0E]/80 mix-blend-multiply z-0" />
        </>
      )}
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="sr-only">{data?.[`title_${lang}`]}</h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {testimonials.map((testi: any, i: number) => (
            <div key={i} className="testi-card relative">
              <Quote className="text-[#C24C2A] w-16 h-16 opacity-30 mb-8" />
              <p className="font-display italic text-3xl md:text-5xl leading-tight mb-10 text-[#F5EDE0]">
                "{testi[`quote_${lang}`]}"
              </p>
              <div className="border-t border-[#F5EDE0]/10 pt-6">
                <p className="text-xl font-medium text-[#C24C2A]">{testi[`author_${lang}`]}</p>
                <p className="text-sm uppercase tracking-widest text-[#F5EDE0]/50 mt-3">{testi[`role_${lang}`]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
