import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Why: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.why-title', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' })
      .fromTo('.why-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  return (
    <section ref={container} className="py-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="why-title font-display text-5xl md:text-6xl text-[#2A1A0E] mb-16">
          Pourquoi je fais ça
        </h2>
        
        <p className="why-text text-2xl md:text-3xl font-medium text-[#C24C2A] mb-12">
          Je l'ai fait seule. Dans le silence. Sans soutien.<br/>
          <span className="italic block mt-4 text-[#2A1A0E]">Je ne veux pas ça pour toi.</span>
        </p>
        
        <p className="why-text text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed mb-12">
          Tu n'as pas à te reconstruire dans l'obscurité, à tâtons, en espérant que quelque chose finisse par tenir. Tu mérites un espace où tu peux te regarder honnêtement, sans jugement, avec quelqu'un qui est déjà passée par là.
        </p>

        <p className="why-text text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed bg-[#F4E8D9] p-10 md:p-14 rounded-[2.5rem]">
          Mon rôle n'est pas de te dire qui être. C'est de t'accompagner à retrouver ce que tu sais déjà, et d'ancrer ce changement pour qu'il devienne vraiment le tien, bien au-delà de notre travail ensemble.
        </p>
      </div>
    </section>
  );
};
