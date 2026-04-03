import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { client } from '../../lib/sanity';

const STORAGE_KEY = 'promo-banner-dismissed';
const BANNER_H = 44;

export const PromoBanner: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [visible, setVisible] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    // Cherche une offre avec bannerVisible = true et non expirée
    const today = new Date().toISOString().slice(0, 10);
    client.fetch(
      `*[_type == "pageOffer" && visible == true && bannerVisible == true && (!defined(bannerExpiry) || bannerExpiry >= $today)][0]`,
      { today }
    ).then((offer) => {
      if (offer) {
        const dismissed = localStorage.getItem(STORAGE_KEY);
        if (dismissed) return;
        setData(offer);
        setVisible(true);
      }
    }).catch(() => {});
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

  if (!visible || !data) return null;

  const label  = data[`bannerLabel_${lang}`];
  const text   = data[`bannerText_${lang}`];
  const cta    = data[`bannerCta_${lang}`];
  const link   = `/${data.slug?.current}`;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[120] flex items-center justify-center px-10 text-sm"
      style={{ backgroundColor: '#2A1A0E', height: `${BANNER_H}px` }}
    >
      <p style={{ color: '#F5EDE0' }} className="flex flex-wrap items-center justify-center text-center gap-2 pr-4 md:pr-0">
        {label && <span>{label}</span>}
        {label && text && <span className="opacity-40 hidden sm:inline">·</span>}
        {text && <span className="hidden sm:inline">{text}</span>}
        {cta && <span className="opacity-40">·</span>}
        {cta && (
          <Link
            to={link}
            className="font-medium hover:opacity-80 transition-opacity"
            style={{ color: '#C24C2A' }}
          >
            {cta}
          </Link>
        )}
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
