import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Offers: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);
  const offersList = data?.list || [];
  const featuresLabel = data?.[`featuresLabel_${lang}`];
  const startingAt = data?.[`startingAt_${lang}`];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 70%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.offers-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.offer-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="light" className="py-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center offers-header mb-20">
          <h2 className="font-display text-5xl md:text-7xl text-[#2A1A0E] mb-6">
            {data?.[`title_${lang}`]}
          </h2>
          <p className="text-xl font-light text-[#2A1A0E]/60 max-w-2xl mx-auto whitespace-pre-line">
            {data?.[`subtitle_${lang}`]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-10 lg:items-stretch pt-12 pb-16">
          {offersList.map((offer: any, i: number) => (
            <div key={i} className={`offer-card relative rounded-3xl p-8 md:p-12 flex flex-col transition-transform duration-500 ${
              offer.highlighted ? 'bg-[#2A1A0E] text-[#F5EDE0] lg:scale-105 shadow-2xl z-10' : 'bg-white text-[#2A1A0E] shadow-xl lg:my-4'
            }`}>
              {offer.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C24C2A] text-white text-xs uppercase tracking-widest font-semibold py-2 px-4 rounded-full flex items-center gap-2 shadow-lg">
                  <Sparkles size={14} /> Best Seller
                </div>
              )}

              <div className="mb-8">
                <h3 className={`font-display text-4xl mb-4 ${offer.highlighted ? 'text-[#C24C2A]' : 'text-[#2A1A0E]'}`}>
                  {offer.name}
                </h3>
                <div className={`text-sm uppercase tracking-widest font-medium mb-6 ${offer.highlighted ? 'text-[#F5EDE0]/60' : 'text-[#2A1A0E]/50'}`}>
                  {offer[`duration_${lang}`]} <span className="mx-2">·</span> {startingAt} {offer.price}
                </div>
                <p className={`font-medium leading-relaxed ${offer.highlighted ? 'text-[#F5EDE0]' : 'text-[#2A1A0E]'}`}>
                  {offer[`subtitle_${lang}`]}
                </p>
                {offer[`description_${lang}`] && (
                  <p className="mt-4 text-sm font-light leading-relaxed opacity-80">
                    {offer[`description_${lang}`]}
                  </p>
                )}
              </div>

              <div className="flex-grow mt-auto mb-10">
                <div className="text-xs uppercase tracking-widest mb-6 font-semibold opacity-50">{featuresLabel}</div>
                <ul className="space-y-4">
                  {(offer[`features_${lang}`] || []).map((feature: string, j: number) => (
                    <li key={j} className="flex items-start gap-4 text-sm leading-relaxed font-light">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${offer.highlighted ? 'bg-[#C24C2A]' : 'bg-[#2A1A0E]'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/booking" className={`w-full py-3 rounded-full flex items-center justify-center gap-2 font-medium uppercase tracking-wide text-[11px] transition-all duration-300 group mt-auto ${
                offer.highlighted ? 'bg-[#C24C2A] text-white hover:bg-[#F5EDE0] hover:text-[#2A1A0E]' : 'bg-[#2A1A0E] text-white hover:bg-[#C24C2A]'
              }`}>
                {offer[`cta_${lang}`]}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
