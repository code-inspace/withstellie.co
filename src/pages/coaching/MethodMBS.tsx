import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const MethodMBS: React.FC<{ data?: any; lang?: string }> = ({
  data,
  lang = "fr",
}) => {
  const container = useRef<HTMLElement>(null);
  const dimensions = data?.dimensions || [];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });
      tl.fromTo(
        ".mbs-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      )
        .fromTo(
          ".mbs-intro",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".mbs-card",
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          ".mbs-footer",
          { opacity: 0, filter: "blur(10px)" },
          { opacity: 1, filter: "blur(0px)", duration: 1 },
          "-=0.2",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      data-navbar-theme="dark"
      className="py-32 px-6 md:px-16 bg-[#2A1A0E] text-[#F5EDE0] rounded-t-[3rem] relative overflow-hidden"
    >
      {data?.backgroundImage?.asset?.url && (
        <>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url(${data.backgroundImage.asset.url})`,
            }}
          />
          <div className="absolute inset-0 bg-[#2A1A0E]/80 mix-blend-multiply z-0" />
        </>
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="mbs-title font-display text-5xl md:text-7xl mb-8">
            {data?.[`title_${lang}`]}
          </h2>
          <p className="mbs-intro text-xl md:text-2xl font-light text-[#F5EDE0]/80 max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
            {data?.[`subtitle_${lang}`]}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {dimensions.map((dim: any, i: number) => (
            <div
              key={i}
              className="mbs-card bg-[#F5EDE0]/5 rounded-[2rem] p-10 md:p-12 hover:bg-[#F5EDE0]/10 transition-colors duration-500 h-full flex flex-col"
            >
              <h3 className="font-display italic text-5xl text-[#C24C2A] mb-8">
                {dim.title}
              </h3>
              <p className="text-lg leading-relaxed font-light text-[#F5EDE0]/70">
                {dim[`desc_${lang}`]}
              </p>
            </div>
          ))}
        </div>

        <div className="mbs-footer text-center mt-16 pb-8 border-b border-[#F5EDE0]/10">
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-[#F5EDE0]/40">
            {data?.[`labels_${lang}`]}
          </p>
        </div>
      </div>
    </section>
  );
};
