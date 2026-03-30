import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S01Hero } from './S01Hero';
import { S02Hook } from './S02Hook';
import { S03About } from './S03About';
import { S04Method } from './S04Method';
import { S05Testimonials } from './S05Testimonials';
import { S06CTA } from './S06CTA';
import { S07Footer } from './S07Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home2() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-[#1A0000] text-[#F5EDE0] min-h-screen font-sans overflow-x-hidden">
      {/* Minimal navbar for home2 */}
      <header className="fixed top-0 left-0 right-0 z-50 py-5 px-8 flex justify-between items-center mix-blend-difference pointer-events-none">
        <a href="/" className="font-display italic text-white text-xl pointer-events-auto hover:opacity-70 transition-opacity">
          stellie
        </a>
        <a
          href="/reserver"
          className="pointer-events-auto text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors"
        >
          Réserver
        </a>
      </header>

      <main>
        <S01Hero />
        <S02Hook />
        <S03About />
        <S04Method />
        <S05Testimonials />
        <S06CTA />
        <S07Footer />
      </main>
    </div>
  );
}
