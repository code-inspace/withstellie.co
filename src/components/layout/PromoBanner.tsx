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
    client.fetch(`*[_type == "globalBanner"][0]`)
      .then((res) => {
        if (!res || !res.visible) return;
        const dismissed = localStorage.getItem(STORAGE_KEY);
        if (dismissed) return;
        if (res.expiry && new Date() > new Date(res.expiry)) return;
        setData(res);
        setVisible(true);
      })
      .catch(() => {});
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

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[120] flex items-center justify-center px-10 text-sm"
      style={{ backgroundColor: '#2A1A0E', height: `${BANNER_H}px` }}
    >
      <p style={{ color: '#F5EDE0' }} className="flex flex-wrap items-center justify-center text-center gap-2 pr-4 md:pr-0">
        <span>{data[`label_${lang}`]}</span>
        <span className="opacity-40 hidden sm:inline">·</span>
        <span className="hidden sm:inline">{data[`text_${lang}`]}</span>
        <span className="opacity-40">·</span>
        <Link
          to={data.link || '/offre-avril'}
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: '#C24C2A' }}
        >
          {data[`cta_${lang}`]}
        </Link>
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
