import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    letter: 'M',
    title: 'Mind',
    desc: 'Clarifier tes pensées, sortir du mental.',
  },
  {
    letter: 'B',
    title: 'Body',
    desc: 'Écouter ce que le corps porte pour toi.',
  },
  {
    letter: 'S',
    title: 'Soul',
    desc: 'Retrouver ton centre, ta direction.',
  },
];

export const S04Method: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const svgLineRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    // Scale reveal on cards
    gsap.fromTo('.mbs-card',
      { scale: 0.85, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // SVG line draw
    if (svgLineRef.current) {
      const length = svgLineRef.current.getTotalLength();
      gsap.set(svgLineRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(svgLineRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        }
      });
    }
  }, { scope: container });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardEl: HTMLDivElement) => {
    const rect = cardEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(cardEl, {
      rotateY: x * 16,
      rotateX: -y * 16,
      scale: 1.04,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800,
    });
  };

  const handleMouseLeave = (cardEl: HTMLDivElement) => {
    gsap.to(cardEl, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.7)',
    });
  };

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 bg-[#8B2500] overflow-hidden"
    >
      {/* Background grain */}
      <div className="absolute inset-0 opacity-20 bg-grain pointer-events-none"></div>

      <span className="text-[#DA7134] uppercase tracking-[0.4em] text-xs font-bold mb-6 block text-center">
        La Méthode
      </span>

      <h2 className="font-display text-[#F5E6D0] text-5xl md:text-7xl italic mb-4 text-center leading-tight">
        MBS Method
      </h2>
      <p className="text-[#F5E6D0]/60 text-center text-sm mb-20 uppercase tracking-[0.3em]">Mind · Body · Soul</p>

      {/* SVG connecting line */}
      <div className="relative w-full max-w-5xl mb-4 hidden md:block h-4">
        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
          <path
            ref={svgLineRef}
            d="M 16.67% 50% Q 50% 0% 83.33% 50%"
            fill="none"
            stroke="#DA7134"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="mbs-card relative bg-[#1A0000] border border-[#DA7134]/20 p-10 flex flex-col items-center text-center cursor-default"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            {/* Large letter */}
            <span className="font-display text-[#DA7134] text-[8rem] leading-none mb-2 select-none" style={{ textShadow: '0 0 60px rgba(218,113,52,0.3)' }}>
              {p.letter}
            </span>

            <h3 className="font-display text-[#F5EDE0] text-3xl italic mb-4">{p.title}</h3>

            <div className="w-8 h-px bg-[#DA7134]/50 mb-5"></div>

            <p className="text-[#F5EDE0]/60 text-sm leading-relaxed max-w-[200px]">{p.desc}</p>
          </div>
        ))}
      </div>

      <a
        href="/methode"
        className="mt-16 text-[#DA7134] text-sm uppercase tracking-[0.3em] font-medium border-b border-[#DA7134]/40 pb-1 hover:border-[#DA7134] transition-all flex items-center gap-3 group"
      >
        Découvrir la méthode complète
        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
      </a>
    </section>
  );
};
