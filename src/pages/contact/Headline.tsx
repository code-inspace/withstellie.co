import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Headline: React.FC<{ data?: any; lang?: string }> = ({
  data,
  lang = "fr",
}) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
      tl.fromTo(
        ".con-head",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      data-navbar-theme="dark"
      className="pt-48 pb-36 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] relative overflow-hidden"
    >
      {data?.backgroundImage?.asset?.url && (
        <>
          <img
            src={data.backgroundImage.asset.url}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-[#2A1A0E]/80 mix-blend-multiply z-0" />
        </>
      )}

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg
          viewBox="0 0 1440 110"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
        >
          <path d="M0,0 Q720,110 1440,0 L1440,110 L0,110 Z" fill="#F9F3EC" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C24C2A]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="con-head font-display text-6xl md:text-8xl lg:text-[7rem] tracking-tight leading-[0.95] mb-12">
          {data?.[`title_${lang}`]}
        </h1>
        <p className="con-head text-2xl md:text-3xl font-light text-[#F5EDE0]/90 leading-relaxed mb-10 max-w-3xl mx-auto whitespace-pre-line">
          {data?.[`subtitle_${lang}`]}
        </p>
        <p className="con-head text-sm uppercase tracking-widest font-medium text-[#C24C2A] bg-[#C24C2A]/10 inline-block px-6 py-3 rounded-full">
          {data?.[`subline_${lang}`]}
        </p>
      </div>
    </section>
  );
};
