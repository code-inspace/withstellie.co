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
    <section ref={container} data-navbar-theme="dark" className="bg-[#2A1A0E] text-[#F5EDE0] rounded-b-[3rem] mb-12 relative overflow-hidden">
      {data?.backgroundImage?.asset?.url && (
        <>
          <img src={data.backgroundImage.asset.url} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-[#2A1A0E]/80 mix-blend-multiply z-0" />
        </>
      )}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10">
        <svg viewBox="0 0 375 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block md:hidden" style={{ height: '80px' }}>
          <path d="M0,0 L375,0 L375,40 C275,0 100,80 0,40 Z" fill="#F9F3EC" />
        </svg>
        <svg viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full hidden md:block">
          <path d="M0,0 L1440,0 L1440,20 C1380,30 1310,72 1200,50 C1000,10 800,90 600,45 C400,0 200,90 0,30 Z" fill="#F9F3EC" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto relative z-10 px-6 md:px-16 py-32">
        <h2 className="sr-only">{data?.[`title_${lang}`]}</h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {testimonials.map((testi: any, i: number) => (
            <div key={i} className="testi-card relative">
              <Quote className="text-[#C24C2A] w-12 h-12 opacity-30 mb-6" />
              <p className="font-display italic text-2xl md:text-4xl leading-tight mb-8 text-[#F5EDE0]">
                "{testi[`quote_${lang}`]}"
              </p>
              <div className="border-t border-[#F5EDE0]/10 pt-5">
                <p className="text-lg font-medium text-[#C24C2A]">{testi[`author_${lang}`]}</p>
                <p className="text-xs uppercase tracking-widest text-[#F5EDE0]/50 mt-2">{testi[`role_${lang}`]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
