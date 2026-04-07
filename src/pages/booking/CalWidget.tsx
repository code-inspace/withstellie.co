import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Info } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";

export const CalWidget: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.cal-header', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.cal-widget', { opacity: 0, scale: 0.98, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.6')
      .fromTo('.cal-reassurance', { opacity: 0, y: 20 }, { opacity: 1, y:0, duration: 1 }, '-=0.4');
  }, { scope: container });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        "theme": "light",
        "cssVarsPerTheme": {
          "light": {"cal-brand": "#C24C2A"},
          "dark": {"cal-brand": "#C24C2A"}
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <section data-navbar-theme="light" ref={container} className="py-16 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center cal-header mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-[#2A1A0E] mb-4">
            {data?.[`title_${lang}`]}
          </h2>
        </div>

        <div className="cal-widget bg-white rounded-3xl overflow-hidden shadow-xl mb-12 relative border border-[#2A1A0E]/5 h-[580px] md:h-[500px]">
          <Cal 
            namespace="30min"
            calLink="stellie/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true", "theme": "light" }}
          />
        </div>

        <div className="cal-reassurance flex flex-col md:flex-row items-center justify-center gap-6 text-[#2A1A0E]/70 text-sm font-medium">
          <div className="flex items-center gap-3 bg-[#2A1A0E]/5 px-6 py-4 rounded-full">
            <Info size={18} className="text-[#C24C2A]" />
            {data?.[`info1_${lang}`]}
          </div>
          <div className="flex items-center gap-3 bg-[#2A1A0E]/5 px-6 py-4 rounded-full">
            <Info size={18} className="text-[#C24C2A]" />
            {data?.[`info2_${lang}`]}
          </div>
        </div>
      </div>
    </section>
  );
};
