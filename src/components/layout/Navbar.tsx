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

  useEffect(() => {
    client.fetch(`*[_type == "globalNav"][0]`)
      .then((res) => {
        if (res) setData(res);
      })
      .catch((err) => console.error("Sanity nav fetch error", err));

    const NAV_MID = 32;

    // Cache des positions — recalculé après init GSAP et au resize
    type Bound = { top: number; bottom: number; theme: string };
    const bounds: Bound[] = [];

    const refreshBounds = () => {
      bounds.length = 0;
      const sections = document.querySelectorAll<HTMLElement>('[data-navbar-theme]');
      sections.forEach(section => {
        // Si GSAP a wrappé la section dans un pin-spacer, utiliser le spacer
        // mais seulement sa position de départ (offsetTop), pas sa hauteur totale
        const spacer = section.parentElement?.classList.contains('pin-spacer')
          ? section.parentElement
          : null;
        const top = spacer ? spacer.offsetTop : section.offsetTop;
        // Pour la hauteur, toujours utiliser la section elle-même (h-screen)
        // sauf si elle est fixed (pinned) → lire offsetHeight du spacer
        const bottom = spacer
          ? spacer.offsetTop + spacer.offsetHeight
          : section.offsetTop + section.offsetHeight;
        bounds.push({ top, bottom, theme: section.dataset.navbarTheme ?? 'dark' });
      });
    };

    // Laisser GSAP s'initialiser avant de lire les positions
    const initTimer = setTimeout(refreshBounds, 300);
    window.addEventListener('resize', refreshBounds);

    const detect = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastY.current;
      lastY.current = currentY;

      setAtTop(currentY < 80);
      setVisible(currentY < 80 || scrollingUp);

      const navPos = currentY + NAV_MID;
      let theme = 'dark';
      for (const { top, bottom, theme: t } of bounds) {
        if (navPos >= top && navPos < bottom) { theme = t; break; }
      }
      setIsDark(theme === 'dark');
    };

    refreshBounds();
    detect();
    window.addEventListener('scroll', detect, { passive: true });
    return () => {
      clearTimeout(initTimer);
      window.removeEventListener('scroll', detect);
      window.removeEventListener('resize', refreshBounds);
    };
  }, []);

  const forceLight = menuOpen || isDark;
  const textCls  = forceLight ? 'text-[#F5EDE0]/80' : 'text-[#2A1A0E]/70';
  const logoCls  = forceLight ? 'brightness-0 invert' : 'brightness-0';
  const burgerCls = forceLight ? 'bg-[#F5EDE0]' : 'bg-[#2A1A0E]';

  return (
    <>
      <header
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
          <Link to="/a-propos" onClick={() => setMenuOpen(false)} className="mobile-link text-[#F5EDE0] text-3xl font-light uppercase tracking-[0.2em]">{data?.[`link1_${i18n.language}`] || (i18n.language === 'en' ? 'About' : 'À propos')}</Link>
          <Link to="/coaching" onClick={() => setMenuOpen(false)} className="mobile-link text-[#F5EDE0] text-3xl font-light uppercase tracking-[0.2em]">{data?.[`link2_${i18n.language}`] || (i18n.language === 'en' ? 'Work with me' : 'L\'accompagnement')}</Link>
          <Link to="/booking" onClick={() => setMenuOpen(false)} className="mobile-link text-[#F5EDE0] text-3xl font-light uppercase tracking-[0.2em]">{data?.[`link3_${i18n.language}`] || (i18n.language === 'en' ? 'Book' : 'Réserver')}</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mobile-link text-[#F5EDE0] text-3xl font-light uppercase tracking-[0.2em]">{data?.[`link4_${i18n.language}`] || (i18n.language === 'en' ? 'Contact' : 'Contact')}</Link>
          
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
