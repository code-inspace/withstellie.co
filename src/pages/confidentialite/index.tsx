import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { useTranslation } from "react-i18next";
import { client } from "../../lib/sanity";

const Confidentialite: React.FC = () => {
  const [data, setData] = useState<any>({});
  const { i18n } = useTranslation();
  const lang = i18n.language || 'fr';

  useEffect(() => {
    client.fetch(`*[_type == "pageConfidentialite"][0]`)
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
           {data?.[`title_${lang}`] || (lang === 'en' ? 'Privacy Policy.' : 'Politique de confidentialité.')}
        </h1>

        <div className="space-y-14 text-[#2A1A0E]/70 font-light leading-relaxed">

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section1Title_${lang}`] || (lang === 'en' ? 'Data Controller' : 'Responsable du traitement')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section1Text_${lang}`] || (lang === 'en' ?
                'Chrystel Bruce, withstellie.co\nEmail: chrystelbrc.pro@gmail.com' :
                'Chrystel Bruce, withstellie.co\nEmail : chrystelbrc.pro@gmail.com')}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section2Title_${lang}`] || (lang === 'en' ? 'Data Collected' : 'Données collectées')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section2Text_${lang}`] || (lang === 'en' ?
                'This site does not automatically collect any personal data. The only data that may be collected is what you voluntarily submit via the contact or booking forms (name, email address, message).' :
                "Ce site ne collecte aucune donnée personnelle de manière automatique. Les seules données susceptibles d'être recueillies sont celles que vous transmettez volontairement via les formulaires de contact ou de réservation (nom, adresse email, message).")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section3Title_${lang}`] || (lang === 'en' ? 'Purpose of Processing' : 'Finalité du traitement')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section3Text_${lang}`] || (lang === 'en' ?
                "The collected data is used exclusively to:\n- Respond to your contact or booking requests\n- Send you information regarding coaching, if you have consented to it" :
                "Les données collectées sont utilisées exclusivement pour :\n- Répondre à vos demandes de contact ou de réservation\n- Vous envoyer des informations relatives à l'accompagnement, si vous y avez consenti")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section4Title_${lang}`] || (lang === 'en' ? 'Retention Period' : 'Durée de conservation')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section4Text_${lang}`] || (lang === 'en' ?
                "Your data is kept for the time necessary to manage your request, and deleted as soon as it is no longer useful, within a maximum of 3 years after the last contact." :
                "Vos données sont conservées le temps nécessaire à la gestion de votre demande, et supprimées dès qu'elles ne sont plus utiles, dans un délai maximum de 3 ans après le dernier contact.")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section5Title_${lang}`] || (lang === 'en' ? 'Cookies and Local Storage' : 'Cookies et stockage local')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section5Text_${lang}`] || (lang === 'en' ?
                "This site does not use tracking, advertising, or behavioral analysis cookies. No browsing data is transmitted to third parties.\nThe site uses your browser's local storage (localStorage) solely to remember your preference for closing the promotional banner. This data is purely functional, remains on your device, and contains no personal information." :
                "Ce site n'utilise pas de cookies de traçage, de publicité ou d'analyse comportementale. Aucune donnée de navigation n'est transmise à des tiers.\nLe site utilise le stockage local (localStorage) de votre navigateur uniquement pour mémoriser votre préférence de fermeture du bandeau promotionnel. Cette donnée est purement fonctionnelle, reste sur votre appareil et ne contient aucune information personnelle.")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section6Title_${lang}`] || (lang === 'en' ? 'Data Sharing' : 'Partage des données')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section6Text_${lang}`] || (lang === 'en' ?
                "Your personal data is never sold, rented, or transferred to third parties. It may be transmitted to technical service providers (hosting, messaging) in strict compliance with current regulations." :
                "Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers. Elles peuvent être transmises à des prestataires techniques (hébergement, messagerie) dans le strict respect de la réglementation en vigueur.")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section7Title_${lang}`] || (lang === 'en' ? 'Your Rights' : 'Vos droits')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section7Text_${lang}`] || (lang === 'en' ?
                "In accordance with the GDPR, you have the following rights:\n- Right of access to your data\n- Right to rectification\n- Right to erasure\n- Right to object to processing\n- Right to data portability\nTo exercise these rights, contact us at: chrystelbrc.pro@gmail.com" :
                "Conformément au RGPD, vous disposez des droits suivants :\n- Droit d'accès à vos données\n- Droit de rectification\n- Droit à l'effacement\n- Droit d'opposition au traitement\n- Droit à la portabilité\nPour exercer ces droits, contactez-nous à : chrystelbrc.pro@gmail.com")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section8Title_${lang}`] || (lang === 'en' ? 'Complaints' : 'Réclamation')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section8Text_${lang}`] || (lang === 'en' ?
                "If you believe your rights are not respected, you can file a complaint with the relevant data protection authority." :
                "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.")}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section9Title_${lang}`] || (lang === 'en' ? 'Updates' : 'Mise à jour')}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section9Text_${lang}`] || (lang === 'en' ?
                "This privacy policy may be updated at any time. The date of the last revision is indicated below.\nLast updated: April 2026" :
                "Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière révision est indiquée ci-dessous.\nDernière mise à jour : avril 2026")}
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Confidentialite;
