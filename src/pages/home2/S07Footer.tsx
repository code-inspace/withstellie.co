import React from 'react';

export const S07Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0000] flex flex-col items-center justify-center py-5 px-6 border-t border-[#DA7134]/10 min-h-[60px]">
      <div className="flex items-center gap-10 w-full max-w-4xl justify-between">
        {/* Logo */}
        <a href="/" className="font-display italic text-[#F5EDE0]/60 text-lg hover:text-[#F5EDE0] transition-colors">
          stellie
        </a>

        {/* Legal links */}
        <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-[#F5EDE0]/30">
          <a href="/mentions-legales" className="hover:text-[#F5EDE0]/60 transition-colors">Mentions légales</a>
          <a href="/confidentialite" className="hover:text-[#F5EDE0]/60 transition-colors">Confidentialité</a>
        </div>

        {/* Social icons */}
        <div className="flex gap-4">
          <a href="https://instagram.com/shift.withstellie" target="_blank" rel="noreferrer" className="text-[#F5EDE0]/30 hover:text-[#DA7134] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@shift.withstellie" target="_blank" rel="noreferrer" className="text-[#F5EDE0]/30 hover:text-[#DA7134] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
