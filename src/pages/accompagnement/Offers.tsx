import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const offers = [
  {
    name: 'SPARK',
    duration: '1 mois',
    price: '400€',
    subtitle: 'Pour celle prête à faire le premier pas.',
    features: [
      '4 appels vidéo 1:1 de 60 minutes',
      'Suivi asynchrone entre les appels, réponse sous 24h',
      'Exercices personnalisés à ton rythme',
      'Bilan final et guide post-coaching'
    ],
    cta: 'Commencer mon shift',
    highlighted: false
  },
  {
    name: 'SHIFT',
    duration: '3 mois',
    price: '990€',
    subtitle: 'Pour celle prête à changer la façon dont elle se perçoit.',
    description: '3 mois, parce que la science le confirme : il faut environ 66 jours pour ancrer une nouvelle habitude durablement. Ce programme est conçu pour qu\'à la fin, ta nouvelle identité soit ancrée, et qu\'elle continue à se déployer bien après notre travail ensemble.',
    features: [
      '12 appels vidéo 1:1 de 60 à 75 minutes',
      'Suivi asynchrone continu, réponse sous 24h',
      'Outils et contenus construits pour toi',
      'Bilan mensuel structuré',
      'Accès entre les appels'
    ],
    cta: 'Commencer ma transformation',
    highlighted: true
  },
  {
    name: 'TRANSFORM',
    duration: '6 mois',
    price: '2000€',
    subtitle: 'Pour celle prête pour un changement profond et durable.',
    description: 'Pas juste un changement. Une réinvention complète.',
    features: [
      '24 appels vidéo 1:1',
      'Suivi prioritaire, réponse sous 12h',
      'Protocole et contenu entièrement sur mesure',
      'Bilans mensuels et plans d\'évolution',
      'Accès d\'urgence entre les appels',
      'Bilan final et plan post-coaching autonome'
    ],
    cta: 'Réserver ma place',
    highlighted: false
  }
];

export const Offers: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 70%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.offers-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.offer-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  return (
    <section ref={container} data-navbar-theme="light" className="py-32 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center offers-header mb-20">
          <h2 className="font-display text-5xl md:text-7xl text-[#2A1A0E] mb-6">
            Trois façons de commencer
          </h2>
          <p className="text-xl font-light text-[#2A1A0E]/60 max-w-2xl mx-auto">
            Tout est personnalisé. Le format change, l'intention reste la même.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-stretch pt-12 pb-16">
          {offers.map((offer, i) => (
            <div key={i} className={`offer-card relative rounded-3xl p-8 md:p-12 flex flex-col h-full transition-transform duration-500 ${
              offer.highlighted ? 'bg-[#2A1A0E] text-[#F5EDE0] lg:scale-105 shadow-2xl z-10' : 'bg-white text-[#2A1A0E] shadow-xl my-4'
            }`}>
              {offer.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C24C2A] text-white text-xs uppercase tracking-widest font-semibold py-2 px-4 rounded-full flex items-center gap-2 shadow-lg">
                  <Sparkles size={14} /> Best Seller
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`font-display text-4xl mb-4 ${offer.highlighted ? 'text-[#C24C2A]' : 'text-[#2A1A0E]'}`}>
                  {offer.name}
                </h3>
                <div className={`text-sm uppercase tracking-widest font-medium mb-6 ${offer.highlighted ? 'text-[#F5EDE0]/60' : 'text-[#2A1A0E]/50'}`}>
                  {offer.duration} <span className="mx-2">·</span> À partir de {offer.price}
                </div>
                <p className={`font-medium italic leading-relaxed ${offer.highlighted ? 'text-[#F5EDE0]' : 'text-[#2A1A0E]'}`}>
                  {offer.subtitle}
                </p>
                {offer.description && (
                  <p className={`mt-4 text-sm font-light leading-relaxed opacity-80`}>
                    {offer.description}
                  </p>
                )}
              </div>

              <div className="flex-grow mt-auto mb-10">
                <div className={`text-xs uppercase tracking-widest mb-6 font-semibold opacity-50`}>Ce que tu as :</div>
                <ul className="space-y-4">
                  {offer.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-4 text-sm leading-relaxed font-light">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${offer.highlighted ? 'bg-[#C24C2A]' : 'bg-[#2A1A0E]'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="/reserver" className={`w-full py-4 rounded-full flex items-center justify-center gap-3 font-medium uppercase tracking-widest text-xs transition-all duration-300 group mt-auto ${
                offer.highlighted ? 'bg-[#C24C2A] text-white hover:bg-[#F5EDE0] hover:text-[#2A1A0E]' : 'bg-[#2A1A0E] text-white hover:bg-[#C24C2A]'
              }`}>
                {offer.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
