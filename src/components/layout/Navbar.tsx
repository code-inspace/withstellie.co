import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import gsap from 'gsap';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Entrance animation
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4 bg-eclipse/80 backdrop-blur-md border-b border-ardent/10" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
          <img 
            src="/logo.png" 
            alt="WithStellie.co" 
            className="h-5 md:h-6 w-auto object-contain" 
          />
        </a>
        
        <div className="flex items-center gap-6 md:gap-12">
          <div className="hidden md:flex gap-4 text-sm font-medium tracking-wider text-[#1a1a1a]/70">
            <button className="text-[#1a1a1a] hover:opacity-70 transition-colors">FR</button>
            <span>/</span>
            <button className="hover:opacity-70 transition-colors">EN</button>
          </div>
          
          <Button variant="outline" size="sm" onClick={() => window.location.href = '/reserver'}>
            Réserver
          </Button>
        </div>
      </div>
    </header>
  );
};
