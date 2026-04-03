import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "C'est quoi la différence avec une psy ?",
    a: "La thérapie explore le passé pour le comprendre. Le coaching travaille à partir de là où tu en es aujourd'hui, vers là où tu veux aller. Je ne diagnostique rien. Je t'accompagne à construire quelque chose de nouveau. Les deux peuvent coexister, et souvent se complètent très bien."
  },
  {
    q: "En combien de temps je verrai des résultats ?",
    a: "Ça dépend de toi, de ce que tu traverses, et du format qu'on choisit ensemble. Ce qui est certain : on ne travaille pas sur des symptômes. On travaille sur les fondations. Les effets sont plus lents à venir, et beaucoup plus durables."
  },
  {
    q: "Et si je ne suis pas prête ?",
    a: "Le fait que tu lises cette page, c'est déjà une information. Tu n'as pas besoin d'être prête à 100%. Tu as juste besoin d'être honnête avec toi-même sur le fait que quelque chose doit changer. Le reste, on le construit ensemble."
  },
  {
    q: "Comment se passe concrètement une session ?",
    a: "En visio, depuis chez toi, à l'heure qui te convient. Chaque session est différente selon où tu en es ce jour-là. Il y a de l'espace pour parler, pour explorer, et des outils concrets à chaque fois. Tu repars toujours avec quelque chose à faire ou à observer."
  }
];

export const FAQ: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.faq-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.faq-item', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.5');
  }, { scope: container });

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section data-navbar-theme="light" ref={container} className="py-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-3xl mx-auto">
        <h2 className="faq-title font-display text-5xl md:text-6xl text-center text-[#2A1A0E] mb-16">
          {data?.[`title_${lang}`] || "Questions fréquentes"}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="faq-item border-b border-[#2A1A0E]/10"
            >
              <button 
                onClick={() => toggleOpen(i)}
                className="w-full text-left py-6 flex justify-between items-center group"
              >
                <span className={`text-xl font-medium transition-colors duration-300 ${openIndex === i ? 'text-[#C24C2A]' : 'text-[#2A1A0E] group-hover:text-[#C24C2A]'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-[#2A1A0E]/40 transition-transform duration-300 shrink-0 ml-4 ${openIndex === i ? 'rotate-180 text-[#C24C2A]' : ''}`} 
                  size={24} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-lg font-light text-[#2A1A0E]/70 leading-relaxed pl-4 border-l-2 border-[#C24C2A]/30">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
