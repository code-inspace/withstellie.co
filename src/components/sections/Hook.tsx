import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TextReveal } from '../ui/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export const Hook: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".hook-line",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power3.out" }
    )
    .fromTo(".hook-highlight",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
      "+=0.2"
    )
    .fromTo(".hook-divider",
      { width: 0, opacity: 0 },
      { width: "80px", opacity: 0.3, duration: 1, ease: "power3.inOut" },
      "-=1"
    )
    .fromTo(".hook-quote-reveal .reveal-word",
      { yPercent: 120, rotate: 2, opacity: 0 },
      { yPercent: 0, rotate: 0, opacity: 1, duration: 1.2, stagger: 0.05, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(".hook-author",
      { opacity: 0, filter: "blur(5px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1 },
      "-=0.5"
    );
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative py-32 px-6 md:px-12 bg-ardent text-eclipse overflow-hidden rounded-[3rem] mx-2 md:mx-6 my-12"
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-sunbeam/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-bliss/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl text-center flex flex-col items-center">
        <div className="space-y-4 md:space-y-6 text-2xl md:text-4xl lg:text-5xl font-light mb-20 tracking-wide text-balance">
          <p className="hook-line">Tu travailles dur.</p>
          <p className="hook-line">Tu fais tout bien.</p>
          <p className="hook-line">Tu coches toutes les cases.</p>
          
          <p className="hook-highlight font-display font-normal italic text-aura font-medium mt-8 pt-4">
            Et pourtant, quelque chose en toi ne se sent pas à sa place.
          </p>
        </div>

        <div className="hook-divider h-[1px] bg-eclipse mb-16"></div>

        <div className="w-full max-w-3xl mx-auto">
          <h2 className="hook-quote text-3xl md:text-5xl font-display font-normal leading-tight text-eclipse mb-8">
            <TextReveal className="hook-quote-reveal">
              "L'identité, ce n'est pas ce qu'on t'a dit d'être. C'est ce que tu choisis de devenir, un souffle à la fois."
            </TextReveal>
          </h2>
          <p className="hook-author font-medium tracking-widest text-sm uppercase text-eclipse/60 flex items-center justify-center gap-4">
            <span className="w-6 h-[1px] bg-sunbeam"></span>
            Stellie
            <span className="w-6 h-[1px] bg-sunbeam"></span>
          </p>
        </div>
      </div>
    </section>
  );
};
