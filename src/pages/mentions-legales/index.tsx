import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { useTranslation } from "react-i18next";
import { client } from "../../lib/sanity";

const MentionsLegales: React.FC = () => {
  const [data, setData] = useState<any>({});
  const { i18n } = useTranslation();
  const lang = i18n.language || 'fr';

  useEffect(() => {
    client.fetch(`*[_type == "pageMentionsLegales"][0]`)
      .then((res) => {
        if (res) setData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />

      <main data-navbar-theme="light" className="pt-40 pb-32 px-8 md:px-16 max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#2A1A0E]/40 mb-6">
           {data?.[`topLabel_${lang}`] || (lang === 'en' ? 'Legal' : 'Légal')}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-[#2A1A0E] leading-[0.95] mb-20 whitespace-pre-line">
           {data?.[`title_${lang}`] || (lang === 'en' ? 'Legal Notice.' : 'Mentions légales.')}
        </h1>

        <div className="space-y-14 text-[#2A1A0E]/70 font-light leading-relaxed">

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
              {data?.[`section1Title_${lang}`] || (lang === 'en' ? 'Site Editor' : 'Éditeur du site')}
            </h2>
            <p className="whitespace-pre-line">
              {data?.[`section1Text_${lang}`] || (lang === 'en' ? 
               'The withstellie.co site is edited by:\nChrystel Bruce\nCoaching activity, self-employed\nEmail: chrystelbrc.pro@gmail.com' :
               'Le site withstellie.co est édité par :\nChrystel Bruce\nActivité de coaching, auto-entrepreneur\nEmail : chrystelbrc.pro@gmail.com')}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
              {data?.[`section2Title_${lang}`] || (lang === 'en' ? 'Hosting' : 'Hébergement')}
            </h2>
            <p className="whitespace-pre-line">
              {data?.[`section2Text_${lang}`] || (lang === 'en' ?
               'This site is hosted by:\nVercel Inc.\n440 N Barranca Ave #4133, Covina, CA 91723, United States\nvercel.com' :
               'Ce site est hébergé par :\nVercel Inc.\n440 N Barranca Ave #4133, Covina, CA 91723, États-Unis\nvercel.com')}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section3Title_${lang}`] || (lang === 'en' ? 'Intellectual Property' : 'Propriété intellectuelle')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section3Text_${lang}`] || (lang === 'en' ?
                "All content on this site (texts, images, visuals, visual identity) is the exclusive property of withstellie.co, unless otherwise stated. Any reproduction, representation, or distribution, in whole or in part, without prior authorization is prohibited." :
                "L'ensemble du contenu de ce site (textes, images, visuels, identité visuelle) est la propriété exclusive de withstellie.co, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section4Title_${lang}`] || (lang === 'en' ? 'Personal Data' : 'Données personnelles')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section4Text_${lang}`] || (lang === 'en' ?
                "This site does not collect any personal data without your consent. For any request regarding your data, you can contact: chrystelbrc.pro@gmail.com" :
                "Ce site ne collecte aucune donnée personnelle sans votre consentement. Pour toute demande relative à vos données, vous pouvez contacter : chrystelbrc.pro@gmail.com")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section5Title_${lang}`] || (lang === 'en' ? 'Cookies and Local Storage' : 'Cookies et stockage local')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section5Text_${lang}`] || (lang === 'en' ?
                "This site does not use tracking or advertising cookies. The browser's local storage (localStorage) is strictly used to remember the closing of the promotional banner. No personal data is involved." :
                "Ce site n'utilise pas de cookies de traçage ou publicitaires. Le stockage local (localStorage) du navigateur est utilisé uniquement pour mémoriser la fermeture du bandeau promotionnel. Aucune donnée personnelle n'est concernée.")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section6Title_${lang}`] || (lang === 'en' ? 'Design & Development' : 'Conception & développement')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section6Text_${lang}`] || (lang === 'en' ?
                "Site designed and developed by Axel Coudair." :
                "Site conçu et développé par Axel Coudair.")}
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
