import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const HeroOriginal: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo('.h3-bg',
      { scale: 1.06 },
      { scale: 1, duration: 2.5, ease: 'power2.out' }
    );

    tl.fromTo('.h3-nav',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=2'
    );

    tl.fromTo('.h3-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=1.2'
    );

    tl.fromTo('.h3-sub',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.6'
    );

    tl.fromTo('.h3-cta',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
      '-=0.5'
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex flex-col overflow-hidden bg-[#2A1A0E]">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Warm amber color wash */}
        <div className="absolute inset-0 bg-[#3D1A08]/50 z-10 mix-blend-multiply"></div>
        {/* Vignette — bords sombres */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,transparent_40%,#1A0A02_100%)] z-10"></div>
        {/* Fade bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A02]/70 via-transparent to-[#1A0A02]/20 z-10"></div>
        <img
          src="/hero.jpg"
          alt="Hero background"
          className="h3-bg w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.65) contrast(1.08) saturate(1.15) sepia(0.35)' }}
        />
      </div>

      {/* Navbar */}
      <nav className="h3-nav relative z-30 flex items-center justify-between px-8 md:px-16 pt-8">
        <a href="/"><img src="/logo.png" alt="WithStellie.co" className="h-5 w-auto object-contain brightness-0 invert" /></a>
        <div className="hidden md:flex items-center gap-8 text-[#F5EDE0]/70 text-sm">
          <a href="/" className="hover:text-[#F5EDE0] transition-colors">Accueil</a>
          <a href="/about" className="hover:text-[#F5EDE0] transition-colors">À propos</a>
          <a href="/methode" className="hover:text-[#F5EDE0] transition-colors">L'accompagnement</a>
          <a href="/contact" className="hover:text-[#F5EDE0] transition-colors">Contact</a>
        </div>
        <div className="text-[#F5EDE0]/60 text-sm flex items-center gap-2">
          <button className="hover:text-[#F5EDE0] transition-colors">EN</button>
          <span>/</span>
          <button className="text-[#F5EDE0] font-medium">FR</button>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-30 flex-1 flex flex-col justify-center items-center text-center px-6 pb-24">
        <h1 className="h3-title font-sans text-[clamp(3rem,8vw,7rem)] text-[#F5EDE0] leading-[1] mb-6 tracking-tight font-bold">
          Re.invent Yourself
        </h1>

        <p className="h3-sub text-[#F5EDE0]/75 text-base md:text-lg max-w-md mb-10 leading-relaxed font-light">
          Coaching de shift identitaire pour les femmes et personnes queer<br />
          prêtes à réécrire leur histoire.
        </p>

        <a
          href="/reserver"
          className="h3-cta px-8 py-3.5 bg-[#C85A3A] text-[#F5EDE0] rounded-full text-sm font-medium hover:bg-[#D96A48] transition-colors duration-300"
        >
          Réserver mon appel découverte
        </a>
      </div>
    </section>
  );
};
