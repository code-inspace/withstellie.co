import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { client } from '../../lib/sanity';

import { Link } from 'react-router-dom';

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const { i18n } = useTranslation();
  const lang = i18n.language || 'fr';

  useEffect(() => {
    client.fetch(`*[_type == "globalFooter"][0]`)
      .then((res) => {
        if (res) setData(res);
      })
      .catch((err) => console.error("Sanity footer fetch error", err));
  }, []);

  return (
    <footer className="bg-transparent text-[#1a1a1a] pt-24 pb-12 px-6 md:px-12 border-t border-[#1a1a1a]/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <Link to="/">
              <img src="/logo.png" alt="WithStellie.co" className="h-8 md:h-10 w-auto object-contain mb-4 brightness-0 hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-lg md:text-xl font-light text-[#1a1a1a]/80">
              {data?.[`subtitle_${lang}`] || (lang === 'en' ? 'Identity shift coaching' : 'Coaching de shift identitaire')}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/shift.withstellie" target="_blank" rel="noreferrer"
                className="p-2 rounded-full border border-[#1a1a1a]/15 hover:border-[#1a1a1a]/40 text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">
                <IconInstagram />
              </a>
              <a href="https://tiktok.com/@shift.withstellie" target="_blank" rel="noreferrer"
                className="p-2 rounded-full border border-[#1a1a1a]/15 hover:border-[#1a1a1a]/40 text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">
                <IconTikTok />
              </a>
            </div>
            <a href="mailto:chrystelbrc.pro@gmail.com"
              className="text-sm font-medium text-[#1a1a1a]/50 hover:text-[#1a1a1a]/80 transition-colors">
              chrystelbrc.pro@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#1a1a1a]/40 pt-8 border-t border-[#1a1a1a]/10 gap-4">
          <div className="flex gap-4">
            <Link to="/legal-notice" className="hover:text-[#1a1a1a]/70 transition-colors">
               {data?.[`legal1_${lang}`] || (lang === 'en' ? 'Legal Notice' : 'Mentions légales')}
            </Link>
            <span>·</span>
            <Link to="/privacy-policy" className="hover:text-[#1a1a1a]/70 transition-colors">
               {data?.[`legal2_${lang}`] || (lang === 'en' ? 'Privacy Policy' : 'Politique de confidentialité')}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <p>© 2026 withstellie.co</p>
            <span>·</span>
            <a href="https://axelcoudair.com" target="_blank" rel="noreferrer" className="hover:text-[#1a1a1a]/70 transition-colors">
               {data?.[`madeBy_${lang}`] || (lang === 'en' ? 'Made by Axel Coudair' : 'Fait par Axel Coudair')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
