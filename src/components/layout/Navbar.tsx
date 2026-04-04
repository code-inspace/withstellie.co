import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { client } from '../../lib/sanity';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Navbar: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isDark, setIsDark] = useState(true);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  useGSAP(() => {
    if (!menuRef.current) return;
    if (menuOpen) {
      gsap.to(menuRef.current, {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 1,
        ease: 'power3.inOut'
      });
      gsap.fromTo('.mobile-link', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: 'circle(0% at 50% 50%)',
        duration: 1,
        ease: 'power3.inOut'
      });
    }
  }, { dependencies: [menuOpen] });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    client.fetch(`*[_type == "globalNav"][0]`)
      .then((res) => { if (res) setData(res); })
      .catch((err) => console.error("Sanity nav fetch error", err));

    // Retourne la couleur de fond réelle derrière la navbar au point (x, y)
    const getBgBehindNav = (x: number, y: number): string | null => {
      const header = headerRef.current;
      const elements = document.elementsFromPoint(x, y) as HTMLElement[];
      for (const el of elements) {
        // Ignorer la navbar et ses enfants
        if (header && (el === header || header.contains(el))) continue;
        // Ignorer les overlays transparents (menus, etc.)
        const bg = getComputedStyle(el).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
      }
      return null;
    };

    // Détermine si une couleur rgb(...) est sombre
    const isDarkColor = (rgb: string): boolean => {
      const match = rgb.match(/\d+/g);
      if (!match) return true;
      const [r, g, b] = match.map(Number);
      // Luminance relative (formule W3C)
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance < 140;
    };

    const detect = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastY.current;
      lastY.current = currentY;

      setAtTop(currentY < 80);
      setVisible(currentY < 80 || scrollingUp);

      // Sonder la couleur au centre de la navbar
      const navY = (headerRef.current?.getBoundingClientRect().top ?? 0)
        + (headerRef.current?.offsetHeight ?? 64) / 2;
      const navX = window.innerWidth / 2;

      const bg = getBgBehindNav(navX, navY);
      if (bg) setIsDark(isDarkColor(bg));
    };

    detect();
    window.addEventListener('scroll', detect, { passive: true });
    window.addEventListener('resize', detect);
    return () => {
      window.removeEventListener('scroll', detect);
      window.removeEventListener('resize', detect);
    };
  }, []);

  const forceLight = menuOpen || isDark;
  const textCls  = forceLight ? 'text-[#F5EDE0]/80' : 'text-[#2A1A0E]/70';
  const logoCls  = forceLight ? 'brightness-0 invert' : 'brightness-0';
  const burgerCls = forceLight ? 'bg-[#F5EDE0]' : 'bg-[#2A1A0E]';

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed left-0 right-0 z-[100] py-6 transition-all duration-500 ${
          atTop && !menuOpen ? '' : !menuOpen ? 'backdrop-blur-md' : ''
        } ${visible || menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100 md:-translate-y-full md:opacity-0'}`}
        style={{ top: 'var(--banner-h, 0px)' }}
      >
      <div className="flex items-center justify-between px-8 md:px-16 w-full relative z-[110]">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="WithStellie.co"
            className={`h-5 w-auto object-contain transition-all duration-300 relative z-[110] ${logoCls}`}
          />
        </Link>

        <div className={`hidden md:flex items-center gap-8 text-sm transition-colors duration-300 ${textCls}`}>
          <Link to="/a-propos" className="hover:opacity-100 transition-opacity">{data?.[`link1_${i18n.language}`] || (i18n.language === 'en' ? 'About' : 'À propos')}</Link>
          <Link to="/coaching" className="hover:opacity-100 transition-opacity">{data?.[`link2_${i18n.language}`] || (i18n.language === 'en' ? 'Work with me' : 'L\'accompagnement')}</Link>
          <Link to="/booking" className="hover:opacity-100 transition-opacity">{data?.[`link3_${i18n.language}`] || (i18n.language === 'en' ? 'Book' : 'Réserver')}</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">{data?.[`link4_${i18n.language}`] || (i18n.language === 'en' ? 'Contact' : 'Contact')}</Link>
        </div>

        <div className={`text-sm flex items-center gap-6 transition-colors duration-300 relative z-[110] ${textCls}`}>
          {/* Desktop Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => changeLanguage('en')}
              className={i18n.language === 'en' ? 'font-medium opacity-100' : 'opacity-60 hover:opacity-100 transition-opacity'}
            >
              EN
            </button>
            <span className="opacity-40">/</span>
            <button 
              onClick={() => changeLanguage('fr')}
              className={i18n.language === 'fr' || !i18n.language ? 'font-medium opacity-100' : 'opacity-60 hover:opacity-100 transition-opacity'}
            >
              FR
            </button>
          </div>
          
          {/* Mobile Burger */}
          <button 
            className="md:hidden flex flex-col gap-[6px] p-2 relative z-[110]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`w-8 h-[2px] block transition-transform duration-500 rounded-full ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''} ${burgerCls}`}></span>
            <span className={`w-8 h-[2px] block transition-opacity duration-500 rounded-full ${menuOpen ? 'opacity-0' : 'opacity-100'} ${burgerCls}`}></span>
            <span className={`w-8 h-[2px] block transition-transform duration-500 rounded-full ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''} ${burgerCls}`}></span>
          </button>
        </div>
      </div>
    </header>

      {/* GSAP Mobile Overlay (Extracted to root to bypass header transforms) */}
      <div 
        ref={menuRef} 
        className="fixed inset-0 z-[95] bg-[#2A1A0E] flex flex-col justify-center items-center pointer-events-none md:hidden w-screen h-screen"
        style={{ clipPath: 'circle(0% at 50% 50%)' }}
      >
        <div className={`flex flex-col items-center gap-8 px-8 w-full text-center ${menuOpen ? 'pointer-events-auto' : ''}`}>
          <Link to="/a-propos" onClick={() => setMenuOpen(false)} className="mobile-link text-[#F5EDE0] text-3xl">{data?.[`link1_${i18n.language}`] || (i18n.language === 'en' ? 'About' : 'À propos')}</Link>
          <Link to="/coaching" onClick={() => setMenuOpen(false)} className="mobile-link text-[#F5EDE0] text-3xl">{data?.[`link2_${i18n.language}`] || (i18n.language === 'en' ? 'Work with me' : 'L\'accompagnement')}</Link>
          <Link to="/booking" onClick={() => setMenuOpen(false)} className="mobile-link text-[#F5EDE0] text-3xl">{data?.[`link3_${i18n.language}`] || (i18n.language === 'en' ? 'Book' : 'Réserver')}</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mobile-link text-[#F5EDE0] text-3xl">{data?.[`link4_${i18n.language}`] || (i18n.language === 'en' ? 'Contact' : 'Contact')}</Link>
          
          <div className="mobile-link flex items-center gap-6 mt-8 text-[#F5EDE0]">
            <button 
              onClick={() => { changeLanguage('en'); setMenuOpen(false); }}
              className={`text-xl tracking-widest ${i18n.language === 'en' ? 'font-medium opacity-100' : 'opacity-60 hover:opacity-100 transition-opacity'}`}
            >
              EN
            </button>
            <span className="opacity-40 text-xl">|</span>
            <button 
              onClick={() => { changeLanguage('fr'); setMenuOpen(false); }}
              className={`text-xl tracking-widest ${i18n.language === 'fr' || !i18n.language ? 'font-medium opacity-100' : 'opacity-60 hover:opacity-100 transition-opacity'}`}
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
