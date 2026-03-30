import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HookOriginal: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const pinWrap = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initialisation
    gsap.set('.scaling-circle', { xPercent: -50, yPercent: -50, scale: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: pinWrap.current,
      }
    });

    // 1. Cercle s'agrandit
    tl.to('.scaling-circle', {
      scale: 35,
      duration: 3.5,
      ease: 'power2.inOut'
    })
    // 2. Textes apparaissent
    .fromTo('.hook-text-line', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, stagger: 0.3, ease: 'power2.out' },
      '-=3' // commence l'apparition des textes pendant que le cercle grandit
    )
    // 3. Fin du scroll : on efface texte & on réduit le cercle pour laisser place naturellement à la suite
    .to('.hook-text-wrapper', {
      y: -150, opacity: 0, duration: 2, ease: 'power2.in'
    }, 'endSequence')
    .to('.scaling-circle', {
      scale: 0, opacity: 0, duration: 2, ease: 'power2.inOut'
    }, 'endSequence');
  }, { scope: container });

  return (
    <section ref={container} className="relative h-[350vh] w-full bg-transparent">
      <div ref={pinWrap} className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent">
        
        {/* Scaling Up Circle */}
        <div className="scaling-circle absolute top-1/2 left-1/2 w-[15vw] h-[15vw] min-w-[300px] min-h-[300px] bg-[#CF7A46] rounded-full z-0 pointer-events-none"></div>

        {/* Textes Principaux */}
        <div className="hook-text-wrapper relative z-10 flex flex-col items-center text-center font-display gap-4 md:gap-5 px-6 max-w-5xl text-[#341C10]">
             
             <div className="overflow-hidden">
               <h2 className="hook-text-line text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1]">Tu sais déjà que quelque chose doit changer.</h2>
             </div>
             <div className="overflow-hidden">
               <h2 className="hook-text-line text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1] mt-2">Tu le sens dans ton corps.</h2>
             </div>
             <div className="overflow-hidden mt-6 mb-4">
               <h2 className="hook-text-line text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1]">
                  Dans ce silence qui pèse entre ce que tu fais et ce que tu es vraiment.
               </h2>
             </div>
             
             <div className="overflow-hidden">
               <h2 className="hook-text-line text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1]">Ce n'est pas un manque de volonté.</h2>
             </div>
             <div className="overflow-hidden">
               <h2 className="hook-text-line text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1] mb-4">Ce n'est pas une faiblesse.</h2>
             </div>

             <div className="overflow-hidden mt-8">
               <h2 className="hook-text-line text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1]">
                  C'est ton identité qui frappe à la porte.
               </h2>
             </div>

        </div>

      </div>
    </section>
  );
};
