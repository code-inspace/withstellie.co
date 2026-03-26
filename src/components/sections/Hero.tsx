import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Animate pills mask (glissement vers le haut)
    tl.fromTo(".mask-pill", 
      { scaleY: 0, transformOrigin: "bottom" },
      { scaleY: 1, duration: 1.5, stagger: 0.15, ease: "power3.inOut" }
    );

    // Animate texts and buttons (opacity + position Y stagger)
    tl.fromTo(".hero-element",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" },
      "-=1" // overlap with mask animation
    );

  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative min-h-screen bg-[#f4f7f4] flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Image Mask */}
        <div className="z-10 order-2 lg:order-1 relative w-full max-w-[320px] md:max-w-md mx-auto lg:mx-0 lg:ml-auto flex justify-center lg:justify-end">
          <svg viewBox="0 0 400 500" className="w-full h-auto" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="pills-mask">
                <rect className="mask-pill" x="0" y="80" width="120" height="380" rx="60" fill="white" />
                <rect className="mask-pill" x="140" y="0" width="120" height="500" rx="60" fill="white" />
                <rect className="mask-pill" x="280" y="120" width="120" height="320" rx="60" fill="white" />
              </mask>
            </defs>
            <image 
              href="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1400&auto=format&fit=crop" 
              width="400" 
              height="500" 
              preserveAspectRatio="xMidYMid slice" 
              mask="url(#pills-mask)" 
            />
          </svg>
        </div>

        {/* Right: Text Content */}
        <div className="z-10 order-1 lg:order-2 flex flex-col items-start text-left lg:pl-10">
          <h1 
            className="hero-element text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#1a1a1a] mb-6 tracking-tight text-balance"
            style={{ fontFamily: "'Inter', 'Sora', sans-serif" }}
          >
            The way you want to be heard
          </h1>
          
          <p 
            className="hero-element text-lg md:text-xl text-[#1a1a1a]/80 font-normal max-w-lg mb-10 text-balance leading-relaxed"
            style={{ fontFamily: "'Inter', 'Sora', sans-serif" }}
          >
            Coaching somatique pour femmes en transition de vie. Sessions 1:1 avec Stellie. Explorons la résonance de votre voix intérieure.
          </p>
          
          <div className="hero-element flex flex-col sm:flex-row flex-wrap gap-4 items-center w-full sm:w-auto">
            <button 
              className="px-8 py-4 bg-[#1a3a32] text-white rounded-full font-medium transition-all hover:bg-[#112621] hover:scale-[1.02] active:scale-95 shadow-md w-full sm:w-auto"
              onClick={() => window.location.href = '/reserver'}
              style={{ fontFamily: "'Inter', 'Sora', sans-serif" }}
            >
              Réserver un appel
            </button>
            <button 
              className="px-8 py-4 bg-transparent text-[#1a1a1a] border border-[#1a1a1a]/20 rounded-full font-medium transition-all flex items-center justify-center gap-2 hover:bg-[#1a1a1a]/5 hover:border-[#1a1a1a]/40 w-full sm:w-auto"
              onClick={() => window.location.href = '/about'}
              style={{ fontFamily: "'Inter', 'Sora', sans-serif" }}
            >
              En savoir plus
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};
