import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

function ArrowBtn({ onClick, disabled, children }: { onClick: () => void; disabled: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
        disabled
          ? 'bg-[#2A1A0E]/20 text-[#2A1A0E]/40 cursor-default'
          : 'bg-[#C24C2A] text-white hover:bg-[#C24C2A]/80'
      }`}
    >
      {children}
    </button>
  );
}

export const Testimonials: React.FC<{ data?: any, lang: string }> = ({ data = {}, lang }) => {
  const container = useRef<HTMLElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const testimonials = data?.list || [];
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Desktop scroll animation
  useGSAP(() => {
    if (isMobile) return;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.t-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.t-card', { opacity: 0, scale: 0.95, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
  }, { scope: container, dependencies: [isMobile] });

  // Mobile coverflow on scroll
  useEffect(() => {
    if (!isMobile) return;
    const el = mobileContainerRef.current;
    if (!el) return;
    applyMobileCoverflow(0);
    const onScroll = () => {
      const virtualPos = el.scrollLeft / el.clientWidth;
      setCurrentCard(Math.round(virtualPos));
      applyMobileCoverflow(virtualPos);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [isMobile, testimonials.length]);

  const applyMobileCoverflow = (virtualPos: number) => {
    testimonials.forEach((_: any, i: number) => {
      const el = cardRefs.current[i];
      if (!el) return;
      const absOffset = Math.abs(i - virtualPos);
      gsap.set(el, {
        scale: Math.max(1 - absOffset * 0.1, 0.8),
        opacity: Math.max(1 - absOffset * 0.4, 0.2),
      });
    });
  };

  const goToCard = (index: number) => {
    mobileContainerRef.current?.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
  };

  // ── Mobile carousel ──────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section ref={container} data-navbar-theme="light" className="py-14 bg-[#EDE7DF]">
        <h2 className="font-display text-5xl md:text-7xl text-center text-[#2A1A0E] mb-10 italic px-6">
          {data[`title_${lang}`]}
        </h2>
        <div className="relative">
          <div
            ref={mobileContainerRef}
            className="w-full overflow-x-auto flex snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: '24px', marginBottom: '-24px' }}
          >
            {testimonials.map((testi: any, i: number) => (
              <div key={i} className="flex-none w-screen snap-center px-8">
                <div
                  ref={el => { cardRefs.current[i] = el; }}
                  className="bg-white rounded-[2rem] p-7 shadow-xl border border-[#2A1A0E]/5 flex flex-col"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Quote className="text-[#C24C2A] w-7 h-7 opacity-30 mb-4" />
                  <p className="font-display text-xl leading-relaxed mb-6 text-[#2A1A0E]/90 italic flex-grow">
                    "{testi[`quote_${lang}`] || testi.quote_fr}"
                  </p>
                  <div className="border-t border-[#2A1A0E]/10 pt-4">
                    <p className="text-sm font-medium text-[#C24C2A]">
                      {testi[`author_${lang}`] || testi.author_fr}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mt-1">
                      {testi[`role_${lang}`] || testi.role_fr}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
            <ArrowBtn onClick={() => goToCard(currentCard - 1)} disabled={currentCard === 0}>
              <ArrowLeft size={16} strokeWidth={1.5} />
            </ArrowBtn>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
            <ArrowBtn onClick={() => goToCard(currentCard + 1)} disabled={currentCard === testimonials.length - 1}>
              <ArrowRight size={16} strokeWidth={1.5} />
            </ArrowBtn>
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => goToCard(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentCard ? 'bg-[#C24C2A] w-4' : 'bg-[#2A1A0E]/20'}`}
            />
          ))}
        </div>
      </section>
    );
  }

  // ── Desktop grid ─────────────────────────────────────────────────────────
  return (
    <section ref={container} data-navbar-theme="light" className="py-20 px-6 md:px-16 bg-[#EDE7DF]">
      <div className="max-w-5xl mx-auto">
        <h2 className="t-title opacity-0 font-display text-5xl md:text-7xl text-center text-[#2A1A0E] mb-14 italic">
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
