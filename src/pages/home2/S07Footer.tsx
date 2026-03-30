import React from 'react';

export const S07Footer: React.FC = () => {
  return (
    <footer className="bg-[#040D18] text-[#EAF4F7] pt-24 pb-12 px-6 md:px-12 border-t border-[#4ABBC8]/10 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display mb-4 text-[#EAF4F7]">stellie</h2>
            <p className="text-lg md:text-xl font-light text-[#B8D8E0]/60">Coaching de shift identitaire</p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:text-base font-medium text-[#B8D8E0]/70">
            <a href="https://instagram.com/shift.withstellie" target="_blank" rel="noreferrer" className="hover:text-[#4ABBC8] transition-colors flex items-center gap-2 group">
              <span className="w-8 h-[1px] bg-[#4ABBC8]/50 group-hover:w-12 transition-all duration-300"></span>
              Instagram @shift.withstellie
            </a>
            <a href="https://tiktok.com/@shift.withstellie" target="_blank" rel="noreferrer" className="hover:text-[#4ABBC8] transition-colors flex items-center gap-2 group">
              <span className="w-8 h-[1px] bg-[#4ABBC8]/50 group-hover:w-12 transition-all duration-300"></span>
              TikTok @shift.withstellie
            </a>
            <a href="mailto:chrystelbrc.pro@gmail.com" className="hover:text-[#4ABBC8] transition-colors flex items-center gap-2 group mt-2">
              <span className="w-8 h-[1px] bg-[#4ABBC8]/50 group-hover:w-12 transition-all duration-300"></span>
              chrystelbrc.pro@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#7ECCD8]/30 pt-8 border-t border-[#4ABBC8]/10 gap-4">
          <div className="flex gap-4">
            <a href="/mentions-legales" className="hover:text-[#7ECCD8]/60 transition-colors">Mentions légales</a>
            <span>·</span>
            <a href="/confidentialite" className="hover:text-[#7ECCD8]/60 transition-colors">Politique de confidentialité</a>
          </div>
          <p>© 2026 withstellie.co</p>
        </div>
      </div>

      <h1 className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 text-[15vw] font-display text-[#4ABBC8] opacity-[0.03] whitespace-nowrap pointer-events-none select-none italic">
        stellie
      </h1>
    </footer>
  );
};
