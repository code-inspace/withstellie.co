import React, { useRef } from "react";
import gsap from "gsap";
import { urlFor } from "../../lib/sanity";
import { useGSAP } from "@gsap/react";

import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

export const Hero: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
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
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#2A1A0E]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Warm amber color wash */}
        {/* <div className="absolute inset-0 bg-[#3D1A08]/50 z-10 mix-blend-multiply"></div> */}
        {/* Vignette — bords sombres */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,transparent_40%,#1A0A02_100%)] z-10"></div>
        {/* Fade bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A02]/70 via-transparent to-[#1A0A02]/20 z-10"></div>
        <img
          src={data?.backgroundImage ? urlFor(data.backgroundImage).url() : "/hero2.png"}
          alt="Hero background"
          className="h3-bg w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.65) contrast(1.08) saturate(1.15)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 flex-1 flex flex-col justify-center items-center text-center px-6 pb-24">
        <h1 className="h3-title opacity-0 font-display text-[clamp(3rem,8vw,7rem)] text-[#F5EDE0] leading-[1] mb-6 tracking-tight font-bold">
          {data?.[`title_${lang}`]}
        </h1>

        <p className="h3-sub opacity-0 text-[#F5EDE0]/75 text-base md:text-lg max-w-md mb-10 leading-relaxed font-light whitespace-pre-line">
          {data?.[`subtitle_${lang}`]}
        </p>

        <Link
          to="/booking"
          className="h3-cta opacity-0 w-fit mx-auto inline-flex items-center justify-center gap-4 px-16 py-5 bg-[#C24C2A] text-[#F5EDE0] rounded-full font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#F5EDE0] hover:text-[#2A1A0E] hover:scale-105 shadow-md group"
        >
          {data?.[`cta_${lang}`]}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
