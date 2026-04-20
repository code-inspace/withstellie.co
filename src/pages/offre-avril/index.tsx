import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { client } from '../../lib/sanity';
import { useTranslation } from 'react-i18next';

const OFFER_SLUG = 'offre-avril';

const OffreAvril: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const location = useLocation();
  const submitted = new URLSearchParams(location.search).get('sent') === '1';
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Noindex — page temporaire
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    client.fetch(`*[_type == "pageOffer" && slug.current == $slug][0]`, { slug: OFFER_SLUG })
      .then(setData)
      .catch(() => setData({}));

    return () => { document.head.removeChild(meta); };
  }, []);

  const t = (key: string, fallback: string) => data?.[`${key}_${lang}`] || data?.[`${key}_fr`] || fallback;

  return (
    <div 
      className="bg-[#F9F3EC] min-h-screen font-sans text-[#2A1A0E]"
      style={{ paddingTop: 'var(--banner-h, 0px)' }}
    >

      {/* Logo */}
      <div className="flex justify-center pt-10 pb-0 px-6">
        <Link to="/">
          <img src="/logo.png" alt="WithStellie.co" className="h-5 w-auto object-contain brightness-0" />
        </Link>
      </div>

      {/* 01 — Headline */}
      <section className="pt-20 pb-16 px-6 md:px-12 max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-8">
          {t('eyebrow', 'Disponible du 7 au 30 avril 2026')}
        </p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1] tracking-tight text-[#2A1A0E] mb-8">
          {t('headline', 'Une offre pour avril.')}
        </h1>
        <p className="text-xl md:text-2xl font-light text-[#2A1A0E]/70 leading-relaxed max-w-xl mx-auto">
          {t('headlineSubtitle', "Parce que certaines d'entre vous attendent depuis trop longtemps.")}
        </p>
      </section>

      <div className="w-12 h-px bg-[#2A1A0E]/15 mx-auto" />

      {/* 02 — Ce que tu reçois */}
      <section className="py-16 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#C24C2A] mb-8">
          {t('includedLabel', 'Ce que tu reçois')}
        </p>
        <div className="space-y-6">
          {(data?.includedItems || []).map((item: any, idx: number) => (
            <div key={idx} className="flex gap-6 items-baseline border-b border-[#2A1A0E]/8 pb-6">
              <span className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 w-40 flex-shrink-0">
                {item[`label_${lang}`] || item.label_fr}
              </span>
              <span className="text-lg font-light text-[#2A1A0E]">
                {item[`value_${lang}`] || item.value_fr}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="w-12 h-px bg-[#2A1A0E]/15 mx-auto" />

      {/* 03 — Pour qui */}
      <section className="py-16 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#C24C2A] mb-8">
          {t('forWhoLabel', 'Cette offre est faite pour toi si')}
        </p>
        <p className="text-xl md:text-2xl font-display font-normal text-[#2A1A0E]/80 leading-relaxed whitespace-pre-line">
          {t('forWho', "Tu sens que quelque chose doit changer, mais tu ne sais pas encore par où commencer.\nTu es prêt·e à t'investir, pas juste à \"essayer\".\nTu cherches un accompagnement humain, pas une méthode de plus.")}
        </p>
      </section>

      <div className="w-12 h-px bg-[#2A1A0E]/15 mx-auto" />

      {/* 04 — Formulaire */}
      <section className="py-16 px-6 md:px-12 max-w-xl mx-auto" id="inscription">
        {submitted ? (
          <div className="text-center py-12">
            <p className="font-display text-4xl text-[#2A1A0E] mb-4">{t('confirmedTitle', "C'est noté.")}</p>
            <p className="text-[#2A1A0E]/60 font-light">
              {t('confirmedText', "Stellie te contacte sous 48 h pour confirmer ta place.")}
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs uppercase tracking-widest text-[#C24C2A] mb-8 text-center">
              {t('formLabel', 'Réserver ma place')}
            </p>
            <form
              action="https://formsubmit.co/chrystelbrc.pro@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Nouvelle inscription — offre avril" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?sent=1`} />
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-2">
                  {t('firstNameLabel', 'Prénom')}
                </label>
                <input
                  type="text"
                  name="Prénom"
                  required
                  className="w-full bg-transparent border-b border-[#2A1A0E]/20 py-3 text-[#2A1A0E] placeholder-[#2A1A0E]/30 focus:outline-none focus:border-[#C24C2A] transition-colors"
                  placeholder={t('firstNamePlaceholder', 'Ton prénom')}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-2">Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full bg-transparent border-b border-[#2A1A0E]/20 py-3 text-[#2A1A0E] placeholder-[#2A1A0E]/30 focus:outline-none focus:border-[#C24C2A] transition-colors"
                  placeholder="ton@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-2">
                  {t('messageLabel', 'Dis-moi en quelques mots où tu en es')}{' '}
                  <span className="normal-case tracking-normal opacity-60">{t('messageOptional', '(facultatif)')}</span>
                </label>
                <textarea
                  rows={3}
                  name="Message"
                  className="w-full bg-transparent border-b border-[#2A1A0E]/20 py-3 text-[#2A1A0E] placeholder-[#2A1A0E]/30 focus:outline-none focus:border-[#C24C2A] transition-colors resize-none"
                  placeholder={t('messagePlaceholder', "Ce n'est pas un formulaire de candidature. Juste un premier contact.")}
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C24C2A] text-[#F5EDE0] rounded-full font-medium hover:bg-[#D35C38] hover:scale-[1.02] transition-all duration-300"
                >
                  {t('submitBtn', 'Je veux cette place')}
                </button>
              </div>
            </form>
          </>
        )}
      </section>

      {/* 05 — Réassurance */}
      <section className="pb-20 px-6 text-center max-w-sm mx-auto">
        <p className="text-sm font-light text-[#2A1A0E]/50 leading-relaxed">
          {t('reassurance', "Tu peux poser toutes tes questions avant de t'engager.")}{" "}
          <a href="mailto:chrystelbrc.pro@gmail.com" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">
            {lang === 'en' ? 'By email' : 'Par email'}
          </a>
          {" "}{lang === 'en' ? 'or on' : 'ou sur'}{" "}
          <a href="https://instagram.com/shift.withstellie" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">
            Instagram
          </a>.
        </p>
      </section>

      {/* Footer */}
      <div className="border-t border-[#2A1A0E]/8 py-8 px-6 flex justify-center gap-6 text-xs text-[#2A1A0E]/30">
        <Link to="/legal-notice" className="hover:text-[#2A1A0E]/60 transition-colors">
          {t('footerLegal', 'Mentions légales')}
        </Link>
        <span>·</span>
        <Link to="/privacy-policy" className="hover:text-[#2A1A0E]/60 transition-colors">
          {t('footerPrivacy', 'Confidentialité')}
        </Link>
      </div>

    </div>
  );
};

export default OffreAvril;