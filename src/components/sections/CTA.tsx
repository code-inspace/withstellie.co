import React, { useRef } from 'react';
import { Button } from '../ui/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CTA: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        end: "bottom 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".cta-bg", 
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    )
    .fromTo(".cta-content > *",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" },
      "-=1"
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 px-6 md:px-12 relative flex justify-center items-center isolate">
      <div className="cta-bg absolute inset-0 mx-4 md:mx-12 my-12 bg-ardent rounded-[3rem] -z-10 overflow-hidden">
        {/* Soft glowing orb behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-sunbeam/30 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="cta-content container mx-auto text-center max-w-3xl flex flex-col items-center py-20">
        <h2 className="text-5xl md:text-7xl font-display text-eclipse mb-8">Prête à te retrouver ?</h2>
        
        <p className="text-xl md:text-2xl font-light text-eclipse/80 mb-12">
          Tu n'as pas besoin d'avoir tout compris. Tu as juste besoin de te dire oui.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Button size="lg" onClick={() => window.location.href = '/reserver'} className="shadow-xl shadow-sunbeam/20">
            Réserver mon appel découverte
          </Button>
          
          <p className="text-sm font-medium tracking-widest uppercase text-eclipse/50">
            Sans engagement · 30 minutes · Entièrement gratuit
          </p>
        </div>
      </div>
    </section>
  );
};
