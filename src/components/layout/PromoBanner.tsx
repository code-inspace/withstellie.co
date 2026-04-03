import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'promo-avril-2026-dismissed';
const EXPIRY = new Date('2026-05-31');
const BANNER_H = 44;

export const PromoBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed && new Date() < EXPIRY) setVisible(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--banner-h',
      visible ? `${BANNER_H}px` : '0px'
    );
  }, [visible]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center px-10 text-sm"
      style={{ backgroundColor: '#8B2500', height: `${BANNER_H}px` }}
    >
      <p style={{ color: '#F5EDE0' }} className="flex items-center gap-2">
        <span>Offre avril</span>
        <span className="opacity-40">·</span>
        <span>Places très limitées</span>
        <span className="opacity-40">·</span>
        <a
          href="/offre-avril"
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: '#F5C84A' }}
        >
          En savoir plus →
        </a>
      </p>
      <button
        onClick={dismiss}
        aria-label="Fermer le bandeau"
        className="absolute right-4 text-xs hover:opacity-100 transition-opacity"
        style={{ color: '#F5EDE0', opacity: 0.5 }}
      >
        ✕
      </button>
    </div>
  );
};
