import React, { useRef } from "react";
import gsap from "gsap";
import { urlFor } from "../../lib/sanity";
import { useGSAP } from "@gsap/react";

import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import type { HomeHero } from '../../types/sanity';

export const Hero: React.FC<{ data?: HomeHero; lang?: string }> = ({ data, lang = 'fr' }) => {
  const d = data as Record<string, string> | undefined;
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        ".h3-bg",
        { scale: 1.06 },
        { scale: 1, duration: 2.5, ease: "power2.out" },
      );

      tl.fromTo(
        ".h3-nav",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=2",
      );

      tl.fromTo(
        ".h3-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=1.2",
      );

      tl.fromTo(
        ".h3-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6",
      );

      tl.fromTo(
        ".h3-cta",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)", clearProps: "transform" },
        "-=0.5",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      data-navbar-theme="dark"
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-[#2A1A0E] rounded-b-[3rem] shadow-2xl z-10 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#2A1A0E]/70 z-10" />
        <img
          src={data?.backgroundImage ? urlFor(data.backgroundImage).url() : "/hero.jpg"}
          alt="Hero background"
          className="h3-bg w-full h-full object-cover object-center opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center text-[#F5EDE0] pt-24">
        <p className="h3-sub opacity-0 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C24C2A] mb-8">
          {d?.[`eyebrow_${lang}`]}
        </p>
        
        <h1 className="h3-title opacity-0 font-display text-5xl md:text-7xl lg:text-[7rem] leading-[1.05] tracking-tight mb-8 whitespace-pre-line">
          {d?.[`title_${lang}`]}
        </h1>

        <p className="h3-sub opacity-0 text-lg md:text-xl font-light text-[#F5EDE0]/70 max-w-2xl mx-auto mb-16 leading-relaxed whitespace-pre-line">
          {d?.[`subtitle_${lang}`]}
        </p>

        <Link
          to={lang === 'en' ? '/en/book' : '/booking'}
          className="h3-cta opacity-0 inline-flex items-center gap-4 bg-[#C24C2A] text-white px-10 py-5 rounded-full uppercase tracking-widest text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#2A1A0E] hover:scale-105 group"
        >
          {d?.[`cta_${lang}`]}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
