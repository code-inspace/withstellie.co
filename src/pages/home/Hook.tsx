import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "Tu sais déjà que quelque chose doit changer.",
  "Tu le sens dans ton corps.",
  "Dans ce silence qui pèse entre ce que tu fais et ce que tu es vraiment.",
  "Ce n'est pas un manque de volonté.",
  "Ce n'est pas une faiblesse.",
  "C'est ton identité qui frappe à la porte.",
];

export const Hook: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const pinWrap = useRef<HTMLDivElement>(null);
  const phraseRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(".scaling-circle", { xPercent: -50, yPercent: -50, scale: 0 });
      phraseRefs.current.forEach(
        (el) => el && gsap.set(el, { opacity: 0, y: 40 }),
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: pinWrap.current,
        },
      });

      // 1. Cercle s'agrandit
      tl.to(".scaling-circle", {
        scale: 35,
        duration: 2.5,
        ease: "power2.inOut",
      });

      // 2. Chaque phrase apparaît puis disparaît avant la suivante
      phraseRefs.current.forEach((el, i) => {
        if (!el) return;
        const isLast = i === phraseRefs.current.length - 1;
        tl.to(el, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        if (!isLast) {
          tl.to(
            el,
            { opacity: 0, y: -30, duration: 0.8, ease: "power2.in" },
            "+=0.4",
          );
        }
      });

      // 3. Dernière phrase + cercle disparaissent
      const last = phraseRefs.current[phraseRefs.current.length - 1];
      if (last)
        tl.to(
          last,
          { opacity: 0, y: -30, duration: 1.5, ease: "power2.in" },
          "+=0.6",
        );
      tl.to(
        ".scaling-circle",
        { scale: 0, opacity: 0, duration: 2, ease: "power2.inOut" },
        "-=1",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      data-navbar-theme="dark"
      className="relative h-[550vh] w-full bg-transparent"
    >
      <div
        ref={pinWrap}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Cercle image hero */}
        <div className="scaling-circle absolute top-1/2 left-1/2 w-[20vw] h-[20vw] min-w-[280px] min-h-[280px] rounded-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#1A0A02]/40 z-10" />
          <img
            src="/hero2.png"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{
              filter:
                "brightness(0.65) contrast(1.08) saturate(1.15) sepia(0.35)",
            }}
          />
        </div>

        {/* Phrases centrées, empilées */}
        <div className="relative z-10 w-full max-w-3xl px-8 md:px-12">
          <div
            className="relative flex items-center justify-center"
            style={{ minHeight: "14rem" }}
          >
            {lines.map((line, i) => (
              <p
                key={i}
                ref={(el) => {
                  phraseRefs.current[i] = el;
                }}
                className="absolute inset-x-0 text-center font-display text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.25] text-[#F5EDE0]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
