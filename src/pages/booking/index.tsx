import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { Program } from './Program';
import { CalWidget } from './CalWidget';
import { ContactAlt } from './ContactAlt';
import { client } from '../../lib/sanity';
import { useTranslation } from 'react-i18next';
import { PageLoader } from '../../components/layout/PageLoader';
import { SEO } from '../../components/SEO';

const Booking: React.FC = () => {
  const { i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sections, setSections] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`{
      "headline":   coalesce(*[_type == "bookingHeadline"][0],   *[_type == "pageBooking"][0].bookingHeadline),
      "program":    coalesce(*[_type == "bookingProgram"][0]{ ..., backgroundImage { asset-> { url } } },    *[_type == "pageBooking"][0].bookingProgram{ ..., backgroundImage { asset-> { url } } }),
      "calWidget":  coalesce(*[_type == "bookingCalWidget"][0],  *[_type == "pageBooking"][0].bookingCalWidget),
      "contactAlt": coalesce(*[_type == "bookingContactAlt"][0], *[_type == "pageBooking"][0].bookingContactAlt)
    }`).then(setSections).catch(() => setSections({}));
  }, []);

  if (!sections) return <PageLoader />;

  const lang = i18n.language;

  return (
    <div id="main-content" className="bg-[#F9F3EC] min-h-screen">
      <SEO
        title="Réserver mon appel | With Stellie"
        description={lang === 'en'
          ? 'Book your free 30-minute discovery call with Stellie. No commitment — just a conversation to see if we\'re a fit.'
          : 'Réserve ton appel découverte gratuit de 30 minutes avec Stellie. Sans engagement — juste une conversation pour voir si ça matche.'
        }
        canonical={lang === 'en' ? '/en/book' : '/booking'}
        lang={lang}
      />
      <Navbar />
      {sections.headline?.visible !== false && <Headline data={sections.headline} lang={lang} />}
      {sections.program?.visible !== false && <Program data={sections.program} lang={lang} />}
      {sections.calWidget?.visible !== false && <CalWidget data={sections.calWidget} lang={lang} />}
      {sections.contactAlt?.visible !== false && <ContactAlt data={sections.contactAlt} lang={lang} />}
      <Footer />
    </div>
  );
};

export default Booking;
