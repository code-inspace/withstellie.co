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
        ".about-head",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" },
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} data-navbar-theme="dark" className="pt-40 pb-36 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      {data?.backgroundImage?.asset?.url && (
        <>
          <img src={data.backgroundImage.asset.url} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-[#2A1A0E]/80 mix-blend-multiply z-0" />
        </>
      )}
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,0 Q720,110 1440,0 L1440,110 L0,110 Z" fill="#F9F3EC" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C24C2A]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col pt-12">
        <h1 className="about-head font-display text-5xl md:text-7xl lg:text-[7rem] text-center leading-[1.1] mb-8">
          {data?.[`title_${lang}`]}
        </h1>
        <p className="about-head text-2xl md:text-4xl font-light italic text-[#C24C2A] text-center max-w-4xl mx-auto leading-relaxed mb-20 whitespace-pre-line">
          {data?.[`subtitle_${lang}`]}
        </p>

        <div className="warning-box flex items-start gap-4 p-6 bg-[#C24C2A]/10 border border-[#C24C2A]/20 rounded-2xl max-w-2xl mx-auto backdrop-blur-md">
          <AlertCircle className="text-[#C24C2A] shrink-0 mt-1" size={20} />
          <div>
            <p className="font-medium text-[#F5EDE0] mb-1">{data?.[`warningTitle_${lang}`]}</p>
            <p className="text-sm font-light text-[#F5EDE0]/70 leading-relaxed whitespace-pre-line">
              {data?.[`warningText_${lang}`]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
