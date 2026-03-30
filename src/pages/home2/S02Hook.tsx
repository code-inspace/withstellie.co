import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  'Tu travailles dur.',
  'Tu fais tout bien.',
  'Et pourtant, quelque chose en toi',
  'ne se sent pas à sa place.',
];

export const S02Hook: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Stagger lines fade in
    gsap.fromTo('.hook2-line',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Slide transition: photo from left, text exits right
    ScrollTrigger.create({
      trigger: container.current,
      start: 'bottom 70%',
      end: 'bottom top',
      scrub: 1.5,
      onUpdate: (self) => {
        const p = self.progress;
        const textEl = container.current?.querySelector('.hook2-text') as HTMLElement;
        const imgEl = container.current?.querySelector('.hook2-img') as HTMLElement;
        if (textEl) gsap.set(textEl, { xPercent: p * 100, opacity: 1 - p });
        if (imgEl) gsap.set(imgEl, { xPercent: -100 + p * 100, opacity: p });
      }
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-screen flex items-center justify-center bg-[#F5EDE0] overflow-hidden"
    >
      {/* Outgoing text block */}
      <div className="hook2-text relative z-10 text-center max-w-2xl px-8">
        {lines.map((line, i) => (
          <p
            key={i}
            className={`hook2-line font-display italic text-[#1A0000] leading-tight mb-2 ${
              i < 2
                ? 'text-[clamp(2rem,5vw,4rem)]'
                : 'text-[clamp(1.6rem,4vw,3.2rem)] text-[#8B2500]'
            }`}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Incoming photo */}
      <div
        className="hook2-img absolute inset-0 z-20 opacity-0"
        style={{ xPercent: -100 } as React.CSSProperties}
      >
        <div className="absolute inset-0 bg-[#1A0000]/40 mix-blend-multiply z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2000&auto=format&fit=crop"
          alt="Stellie lifestyle"
          className="w-full h-full object-cover grayscale-[15%] brightness-75"
        />
      </div>
    </section>
  );
};
