import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../lib/sanity';

export const StellieIntro: React.FC<{ data?: any, lang: string }> = ({ data = {}, lang }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.si-title', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.si-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=0.5')
      .fromTo('.si-image-wrapper', { opacity: 0, scale: 0.95, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=1');
      
    gsap.to('.si-image', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, { scope: container });

  const title = data[`title_${lang}`];
  const text1 = data[`text1_${lang}`];
  const text2 = data[`text2_${lang}`];
  const text3 = data[`text3_${lang}`];
  const text4 = data[`text4_${lang}`];
  const cta = data[`cta_${lang}`];

  return (
    <section ref={container} data-navbar-theme="light" className="py-24 md:py-40 px-6 md:px-16 bg-[#F9F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Colonne Gauche : Titre + Photo (Sticky) */}
        <div className="lg:w-5/12 flex flex-col gap-10 lg:sticky lg:top-32 h-fit relative z-10">
          <h2 className="si-title opacity-0 font-display text-5xl md:text-7xl text-[#2A1A0E] italic">
            {title}
          </h2>
          
          {data?.image && (
            <div className="si-image-wrapper opacity-0 relative aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl w-full max-w-[22rem]">
              <div className="absolute inset-0 bg-[#2A1A0E]/10 z-10 mix-blend-multiply"></div>
              <img 
                src={urlFor(data.image).width(800).url()} 
                alt="Stellie" 
                className="si-image w-full h-[120%] object-cover object-top absolute top-[-10%] left-0"
              />
            </div>
          )}
        </div>
        
        {/* Colonne Droite : Textes (Scroll) */}
        <div className="lg:w-7/12 space-y-10 md:space-y-16 relative z-10 lg:pt-32 pb-12 lg:pb-32">
          <p className="si-text opacity-0 text-2xl md:text-3xl font-light text-[#2A1A0E]/80 leading-relaxed whitespace-pre-line">
            {text1}
          </p>
          <div className="si-text opacity-0 relative">
            <div className="absolute -left-6 md:-left-10 top-0 bottom-0 w-1 bg-[#C24C2A] rounded-full"></div>
            <p className="text-xl md:text-2xl font-light text-[#2A1A0E] leading-relaxed whitespace-pre-line bg-white/40 p-8 rounded-3xl rounded-tl-none shadow-sm backdrop-blur-sm">
              {text2}
            </p>
          </div>
          <p className="si-text opacity-0 text-xl md:text-2xl font-light text-[#2A1A0E]/80 leading-relaxed whitespace-pre-line">
            {text3}
          </p>
          <div 
            className="si-text opacity-0 text-2xl md:text-4xl font-display text-[#C24C2A] italic leading-relaxed whitespace-pre-line mt-8"
            dangerouslySetInnerHTML={{ __html: text4 || "" }}
          />
          
          <div className="si-text opacity-0 pt-8">
            <Link to="/a-propos" className="inline-flex items-center gap-4 text-[#2A1A0E] hover:text-[#C24C2A] uppercase tracking-widest text-sm font-medium transition-colors group">
              {cta}
              <span className="p-4 rounded-full border border-[#2A1A0E]/20 group-hover:bg-[#C24C2A] group-hover:border-transparent transition-all group-hover:translate-x-2 duration-300">
                <ArrowRight size={18} className="group-hover:text-[#F9F3EC]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
