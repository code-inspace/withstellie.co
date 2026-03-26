import React, { useRef } from 'react';
import { Button } from '../ui/Button';
import { TextReveal } from '../ui/TextReveal';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(".hero-eyebrow", 
      { opacity: 0, letterSpacing: "1em", filter: "blur(10px)" },
      { opacity: 1, letterSpacing: "0.2em", filter: "blur(0px)", duration: 1.5, ease: "power3.out" }
    )
    .fromTo(".reveal-word",
      { yPercent: 120, rotate: 2, opacity: 0 },
      { yPercent: 0, rotate: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: "power3.out" },
      "-=1"
    )
    .fromTo(".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(".hero-cta",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
      "-=0.6"
    )
    .fromTo(".hero-image",
      { opacity: 0, scale: 1.1, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1.8, ease: "power3.out" },
      "-=1.5"
    );
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="hero-eyebrow tracking-[0.2em] text-xs md:text-sm uppercase text-sunbeam font-medium mb-8">
            Mind · Body · Soul
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1.1] text-ardent mb-8 text-balance">
            <TextReveal className="block mb-2">Tu n'es pas perdue.</TextReveal>
            <br />
            <TextReveal className="italic text-bliss">Tu es en train de te retrouver.</TextReveal>
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl text-ardent/70 font-light max-w-lg mb-12 text-balance leading-relaxed">
            Coaching somatique pour femmes en transition de vie. Sessions 1:1 avec Stellie.
          </p>
          
          <div className="hero-cta">
            <Button size="lg" onClick={() => window.location.href = '/reserver'}>
              Réserver mon appel découverte gratuit
            </Button>
          </div>
        </div>
        
        <div className="hero-image z-0 order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(26,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-eclipse/60 via-transparent to-sunbeam/20 z-10 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1400&auto=format&fit=crop" 
              alt="Mouvement somatique" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Decorative blur/glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sunbeam/20 blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
