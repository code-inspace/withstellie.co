import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CTA2: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const pinWrap = useRef<HTMLDivElement>(null);
  const starburst = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    // Rotation continue du soleil pendant le scroll
    gsap.to(starburst.current, {
      rotate: 180,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: pinWrap.current,
      }
    });

    // 1. Apparition du texte et glissement vers le haut
    tl.fromTo('.cta2-text-line', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power2.out' }
    )
    // 2. Dessin des lignes SVG (scribbles)
    .fromTo('.cta2-scribble', 
      { strokeDashoffset: 1500 },
      { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' },
      '-=1'
    )
    // 3. Fin du scroll : le texte s'efface vers le haut
    .to('.cta2-text-wrapper, .cta2-scribble, .starburst-wrap', {
      y: -150, opacity: 0, duration: 2, ease: 'power3.inOut'
    }, 'endSequence')
    // 4. Changement de fond en sombre (style CTA)
    .to(pinWrap.current, {
      backgroundColor: '#2A1A0E',
      duration: 2,
      ease: 'power2.inOut'
    }, 'endSequence')
    .fromTo('.cta2-cta-glow',
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: 'power2.inOut' },
      'endSequence'
    )
    // 5. Apparition du CTA
    .fromTo('.cta2-cta-content > *',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: 'power3.out' },
      'endSequence+=0.5'
    );
  }, { scope: container });

  return (
    <section data-navbar-theme="light" ref={container} className="relative h-[400vh] w-full bg-[#F9F7F2]">
      <div ref={pinWrap} className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#F9F7F2]">
        
        {/* SVG Soleil (Starburst) Bleu ciel - positionné derrière le texte */}
        <div className="starburst-wrap absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <svg ref={starburst} className="w-[120vw] md:w-[70vw] max-w-[900px] text-[#A3C4F3] opacity-40 origin-center" viewBox="0 0 200 200" fill="currentColor">
             <path d="M100 0 L108 30 L138 8 L130 38 L170 20 L150 50 L192 42 L162 68 L200 80 L168 93 L200 120 L168 107 L192 158 L150 150 L170 180 L130 162 L138 192 L108 170 L100 200 L92 170 L62 192 L70 162 L30 180 L50 150 L8 158 L32 107 L0 120 L32 93 L0 80 L38 68 L8 42 L50 50 L30 20 L70 38 L62 8 L92 30 Z" />
          </svg>
        </div>

        {/* Contenu Texte Principal */}
        <div className="cta2-text-wrapper relative z-10 flex flex-col items-center text-center font-sans mt-[-5vh]">
          
          {/* Lignes générées avec tracés SVG interpolés */}
          <div className="relative">
             {/* Tracé SVG scribble qui s'entrelace */}
             <svg className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 w-[120%] h-[200%] z-[-1] pointer-events-none overflow-visible" viewBox="0 0 600 200" fill="none" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
               <path className="cta2-scribble" strokeDasharray="1500" strokeDashoffset="1500" d="M-50,150 C100,200 200,-50 350,80 S500,200 650,50" />
               <path className="cta2-scribble" strokeDasharray="1500" strokeDashoffset="1500" d="M650,120 C500,200 300,0 200,80 S0,20 -50,100" />
             </svg>
             
             <div className="overflow-hidden">
               <h2 className="cta2-text-line text-[#111111] text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.9] mb-3">Focus on job</h2>
             </div>
             <div className="overflow-hidden">
               <h2 className="cta2-text-line text-[#111111] text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.9]">satisfaction</h2>
             </div>
          </div>
          
          <div className="overflow-hidden mt-10">
             <p className="cta2-text-line text-[#111111]/70 text-lg md:text-xl font-playfair max-w-lg mx-auto leading-relaxed">
                Apprends à te recentrer. Découvre ce qui te motive profondément et donne une nouvelle dimension à ta carrière.
             </p>
          </div>
        </div>

        {/* Section CTA (Écran de transition) - absolue pour remonter par-dessus */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <div className="cta2-cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#C24C2A]/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="cta2-cta-content relative max-w-3xl flex flex-col items-center text-center pointer-events-auto text-[#F5EDE0] z-10">
            <h2 className="text-5xl md:text-7xl font-display mb-8 text-[#F5EDE0]">Prêt·e à te retrouver ?</h2>
            <p className="text-xl md:text-2xl font-light text-[#F5EDE0]/70 mb-12">
              Tu n'as pas besoin d'avoir tout compris. Tu as juste besoin de te dire oui.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="/booking"
                className="inline-block px-10 py-4 bg-[#C24C2A] text-[#F5EDE0] rounded-full font-medium hover:bg-[#D35C38] hover:scale-105 transition-all duration-300 shadow-xl shadow-[#C24C2A]/20"
              >
                Réserver mon appel découverte
              </a>
              <p className="text-sm font-medium tracking-widest uppercase text-[#F5EDE0]/40">
                Sans engagement · 30 minutes · Entièrement gratuit
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
