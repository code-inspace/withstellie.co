import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { client } from '../../lib/sanity';

export const Navbar: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isDark, setIsDark] = useState(true);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);
  const { i18n } = useTranslation();

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
          <a href="/a-propos" className="hover:opacity-100 transition-opacity">{data?.[`link1_${i18n.language}`] || (i18n.language === 'en' ? 'About' : 'À propos')}</a>
          <a href="/coaching" className="hover:opacity-100 transition-opacity">{data?.[`link2_${i18n.language}`] || (i18n.language === 'en' ? 'Work with me' : 'L\'accompagnement')}</a>
          <a href="/booking" className="hover:opacity-100 transition-opacity">{data?.[`link3_${i18n.language}`] || (i18n.language === 'en' ? 'Book' : 'Réserver')}</a>
          <a href="/contact" className="hover:opacity-100 transition-opacity">{data?.[`link4_${i18n.language}`] || (i18n.language === 'en' ? 'Contact' : 'Contact')}</a>
        </div>

        <div className={`text-sm flex items-center gap-2 transition-colors duration-300 ${textCls}`}>
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
      </div>
    </header>
  );
};
