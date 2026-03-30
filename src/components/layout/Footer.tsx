import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f4f7f4] text-[#1a1a1a] pt-24 pb-12 px-6 md:px-12 border-t border-[#1a1a1a]/10 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <img src="/logo.png" alt="WithStellie.co" className="h-8 md:h-10 w-auto object-contain mb-4" />
            <p className="text-lg md:text-xl font-light text-[#1a1a1a]/80">Coaching de shift identitaire</p>
          </div>
          
          <div className="flex flex-col gap-2 text-sm md:text-base font-medium opacity-80">
            <a href="https://instagram.com/shift.withstellie" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-colors flex items-center gap-2 group">
              <span className="w-8 h-[1px] bg-[#1a1a1a] group-hover:w-12 transition-all duration-300"></span>
              Instagram @shift.withstellie
            </a>
            <a href="https://tiktok.com/@shift.withstellie" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-colors flex items-center gap-2 group">
              <span className="w-8 h-[1px] bg-[#1a1a1a] group-hover:w-12 transition-all duration-300"></span>
              TikTok @shift.withstellie
            </a>
            <a href="mailto:chrystelbrc.pro@gmail.com" className="hover:opacity-60 transition-colors flex items-center gap-2 group mt-2">
              <span className="w-8 h-[1px] bg-[#1a1a1a] group-hover:w-12 transition-all duration-300"></span>
              chrystelbrc.pro@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-50 pt-8 border-t border-[#1a1a1a]/20 gap-4">
          <div className="flex gap-4">
            <a href="/mentions-legales" className="hover:opacity-100 transition-colors">Mentions légales</a>
            <span>·</span>
            <a href="/confidentialite" className="hover:opacity-100 transition-colors">Politique de confidentialité</a>
          </div>
          <p>© 2026 withstellie.co</p>
        </div>
      </div>
      
      {/* Decorative large font in background */}
      <h1 className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 text-[15vw] font-display text-[#1a1a1a] opacity-5 whitespace-nowrap pointer-events-none select-none italic">
        stellie
      </h1>
    </footer>
  );
};
