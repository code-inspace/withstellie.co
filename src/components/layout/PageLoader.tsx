import React from 'react';

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-[#F9F3EC] flex items-center justify-center">
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-[#C24C2A] animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);
