import React, { useEffect, useState, useRef } from 'react';

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const NAV_MID = 32; // px — milieu vertical de la navbar

    const detect = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastY.current;
      lastY.current = currentY;

      setAtTop(currentY < 80);
      setVisible(currentY < 80 || scrollingUp);

      // offsetTop = position dans le doc, non affectée par GSAP pin
      const navPos = currentY + NAV_MID;
      const sections = document.querySelectorAll<HTMLElement>('[data-navbar-theme]');
      let theme = 'dark';
      for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (navPos >= top && navPos < bottom) {
          theme = section.dataset.navbarTheme ?? 'dark';
          break;
        }
      }
      setIsDark(theme === 'dark');
    };

    detect();
    window.addEventListener('scroll', detect, { passive: true });
    return () => window.removeEventListener('scroll', detect);
  }, []);

  const textCls  = isDark ? 'text-[#F5EDE0]/80' : 'text-[#2A1A0E]/70';
  const logoCls  = isDark ? 'brightness-0 invert' : 'brightness-0';

  return (
    <header
      className={`fixed left-0 right-0 z-50 py-6 transition-all duration-500 ${
        atTop ? '' : 'backdrop-blur-md'
      } ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      style={{ top: 'var(--banner-h, 0px)' }}
    >
      <div className="flex items-center justify-between px-8 md:px-16">
        <a href="/">
          <img
            src="/logo.png"
            alt="WithStellie.co"
            className={`h-5 w-auto object-contain transition-all duration-300 ${logoCls}`}
          />
        </a>

        <div className={`hidden md:flex items-center gap-8 text-sm transition-colors duration-300 ${textCls}`}>
          <a href="/about2" className="hover:opacity-100 transition-opacity">À propos</a>
          <a href="/accompagnement" className="hover:opacity-100 transition-opacity">L'accompagnement</a>
          <a href="/reserver" className="hover:opacity-100 transition-opacity">Réserver</a>
          <a href="/contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>

        <div className={`text-sm flex items-center gap-2 transition-colors duration-300 ${textCls}`}>
          <button className="hover:opacity-100 transition-opacity">EN</button>
          <span>/</span>
          <button className="font-medium hover:opacity-100 transition-opacity">FR</button>
        </div>
      </div>
    </header>
  );
};
