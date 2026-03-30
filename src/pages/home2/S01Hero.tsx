import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const S01Hero: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Background scale entrance
    tl.fromTo('.hero2-bg', 
      { scale: 1.08 },
      { scale: 1, duration: 2.5, ease: 'power2.out' }
    );

    // SplitText-style letter-by-letter animation
    const chars = (container.current?.querySelectorAll('.hero2-char') ?? []) as NodeListOf<HTMLElement>;
    tl.fromTo(chars,
      { opacity: 0, y: 40, rotate: 5 },
      { opacity: 1, y: 0, rotate: 0, duration: 0.8, stagger: 0.03, ease: 'power3.out' },
      '-=1.5'
    );

    tl.fromTo('.hero2-sub',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.4'
    );

    tl.fromTo('.hero2-cta',
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.5)' },
      '-=0.5'
    );

    // Scroll clip-path transition: dark to cream
    ScrollTrigger.create({
      trigger: container.current,
      start: 'bottom 90%',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        if (container.current) {
          // We animate the clip-path reveal overlay
          const overlay = container.current.querySelector('.hero2-cream-overlay') as HTMLElement;
          if (overlay) {
            overlay.style.clipPath = `inset(${100 - progress * 100}% 0 0 0)`;
          }
        }
      }
    });

  }, { scope: container });

  const headline1 = 'Tu n\'es pas perdue.';
  const headline2 = 'Tu es en train de te retrouver.';

  const renderChars = (text: string, className = '') =>
    text.split('').map((char, i) => (
      <span key={i} className={`hero2-char inline-block ${char === ' ' ? 'mr-[0.3em]' : ''} ${className}`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#1A0000]"
    >
      {/* Slow rotating SVG circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg className="absolute w-[120vw] h-[120vw] opacity-10 animate-[spin_120s_linear_infinite]" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" fill="none" stroke="#DA7134" strokeWidth="0.5" strokeDasharray="8 12" />
        </svg>
        <svg className="absolute w-[90vw] h-[90vw] opacity-10 animate-[spin_80s_linear_infinite_reverse]" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="160" fill="none" stroke="#E89154" strokeWidth="0.3" strokeDasharray="4 16" />
        </svg>
        <svg className="absolute w-[60vw] h-[60vw] opacity-15 animate-[spin_150s_linear_infinite]" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="190" fill="none" stroke="#DA7134" strokeWidth="0.7" />
        </svg>
      </div>

      {/* Photo background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0000]/60 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0000]/40 via-transparent to-[#1A0000] z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
          alt="Stellie"
          className="hero2-bg w-full h-full object-cover object-top grayscale-[20%] brightness-[0.5]"
        />
      </div>

      {/* Scroll overlay (cream reveal) */}
      <div
        className="hero2-cream-overlay absolute inset-0 bg-[#F5EDE0] z-20 pointer-events-none"
        style={{ clipPath: 'inset(100% 0 0 0)' }}
      ></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="hero2-sub text-xs uppercase tracking-[0.5em] text-[#E89154] mb-12 font-medium">
          Mind · Body · Soul
        </p>

        {/* Headline line 1 - neutral */}
        <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-[#F5EDE0] leading-[0.95] mb-2 tracking-tight overflow-hidden">
          {renderChars(headline1)}
        </h1>

        {/* Headline line 2 - italic sunbeam */}
        <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-[#DA7134] leading-[0.95] italic tracking-tight overflow-hidden mb-10">
          {renderChars(headline2)}
        </h1>

        {/* Sub copy */}
        <p className="hero2-sub text-[#F5EDE0]/70 text-base md:text-lg max-w-lg mb-14 leading-relaxed font-light">
          Coaching somatique pour femmes en transition. Sessions 1:1 avec Stellie.
        </p>

        {/* CTA */}
        <a
          href="/reserver"
          className="hero2-cta inline-flex items-center gap-3 bg-[#DA7134] text-[#1A0000] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#E89154] transition-colors duration-300 shadow-[0_0_40px_rgba(218,113,52,0.4)]"
        >
          Réserver mon appel gratuit
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 opacity-50">
        <div className="w-px h-16 bg-[#DA7134] animate-[scaleY_2s_ease-in-out_infinite] origin-top"></div>
        <span className="text-[#DA7134] text-[10px] uppercase tracking-[0.4em]">Scroll</span>
      </div>
    </section>
  );
};
