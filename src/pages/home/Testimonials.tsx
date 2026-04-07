import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const fallbackTestimonials = [
  {
    quote_fr: "Pour la première fois, j'ai arrêté de me battre contre moi-même. Mon corps m'a enfin dit quelque chose de vrai.",
    quote_en: "For the first time, I stopped fighting myself. My body finally told me something true.",
    author: "Inès",
    age_fr: "28 ans",
    age_en: "28 years old",
    role_fr: "Chargée de projet en reconversion",
    role_en: "Project manager in career transition",
  },
  {
    quote_fr: "Je pensais que j'avais juste besoin de motivation. Ce dont j'avais besoin, c'était de me réentendre.",
    quote_en: "I thought I just needed motivation. What I actually needed was to hear myself again.",
    author: "Camille",
    age_fr: "31 ans",
    age_en: "31 years old",
    role_fr: "Après une rupture professionnelle",
    role_en: "After a professional break",
  },
  {
    quote_fr: "Stellie m'a aidé à distinguer ce que je voulais vraiment de ce qu'on attendait de moi. C'est une différence qui change tout.",
    quote_en: "Stellie helped me distinguish what I really wanted from what was expected of me. It's a difference that changes everything.",
    author: "Sasha",
    age_fr: "34 ans",
    age_en: "34 years old",
    role_fr: "En transition de carrière",
    role_en: "In career transition",
  },
  {
    quote_fr: "Je suis arrivé·e épuisé·e et perdu·e. Je suis reparti·e avec une boussole intérieure que je ne savais pas que j'avais.",
    quote_en: "I arrived exhausted and lost. I left with an internal compass I didn't know I had.",
    author: "Morgan",
    age_fr: "29 ans",
    age_en: "29 years old",
    role_fr: "Après un burn-out",
    role_en: "After burnout",
  },
];

export const Testimonials: React.FC<{ data?: any; lang?: string }> = ({
  data,
  lang = "fr",
}) => {
  const container = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  const testimonials = data?.list || fallbackTestimonials;

  useGSAP(
    () => {
      let mm = gsap.matchMedia(container);

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          let { isMobile } = context.conditions as any;

          const cardWidth = isMobile ? 85 : 50;
          const cardsVisible = isMobile ? 1.1 : 2;
          const totalScroll =
            Math.max(0, testimonials.length - cardsVisible) * cardWidth;

          gsap.to(track.current, {
            x: () => `-${totalScroll}vw`,
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: () => `+=${(totalScroll * window.innerWidth) / 100}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });
        },
      );

      gsap.fromTo(
        ".testi-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      data-navbar-theme="light"
      className="bg-[#F9F3EC] overflow-hidden"
      role="region"
      aria-label={lang === 'en' ? 'Testimonials' : 'Témoignages'}
    >
      <div className="h-screen flex flex-col">
        {/* Titre */}
        <div className="pt-24 pb-12 px-10 md:px-16 flex-shrink-0">
          <h2 className="testi-title font-display text-5xl md:text-7xl text-[#2A1A0E] text-center">
            {data?.[`title_${lang}`]}
          </h2>
        </div>

        {/* Cartes horizontales */}
        <div className="flex-1 flex items-center overflow-hidden px-8 md:px-16">
          <div
            ref={track}
            className="flex gap-4 md:gap-8 will-change-transform w-max pr-[15vw] md:pr-[50vw]"
          >
            {testimonials.map((t: any, i: number) => (
              <div
                key={i}
                className="flex-shrink-0 border border-[#2A1A0E]/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 bg-white/60 relative flex flex-col shadow-sm w-[85vw] md:w-[calc(50vw-2.5rem)]"
              >
                <span className="absolute top-6 md:top-10 right-6 md:right-10 text-[4rem] md:text-[6rem] font-display text-[#C24C2A]/10 leading-none">
                  "
                </span>
                <p className="text-xl md:text-3xl font-display font-normal italic leading-tight text-[#2A1A0E] mb-8 md:mb-12 relative z-10">
                  {t[`quote_${lang}`] || t.quote_fr || t.quote}
                </p>
                <div className="mt-auto border-t border-[#2A1A0E]/10 pt-6">
                  <p className="font-medium text-[#C24C2A] text-sm md:text-base">
                    {t.author}, {t[`age_${lang}`] || t.age_fr || t.age}
                  </p>
                  <p className="text-xs md:text-sm font-light text-[#2A1A0E]/50 mt-1">
                    {t[`role_${lang}`] || t.role_fr || t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
