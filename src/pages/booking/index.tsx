import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { Program } from './Program';
import { CalWidget } from './CalWidget';
import { ContactAlt } from './ContactAlt';
import { client } from '../../lib/sanity';
import { useTranslation } from 'react-i18next';

const Booking: React.FC = () => {
  const { i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sections, setSections] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`{
      "headline":   coalesce(*[_type == "bookingHeadline"][0],   *[_type == "pageBooking"][0].bookingHeadline),
      "program":    coalesce(*[_type == "bookingProgram"][0],    *[_type == "pageBooking"][0].bookingProgram),
      "calWidget":  coalesce(*[_type == "bookingCalWidget"][0],  *[_type == "pageBooking"][0].bookingCalWidget),
      "contactAlt": coalesce(*[_type == "bookingContactAlt"][0], *[_type == "pageBooking"][0].bookingContactAlt)
    }`).then(setSections).catch(() => setSections({}));
  }, []);

  if (!sections) return <div className="min-h-screen bg-[#F9F3EC]" />;

  const lang = i18n.language;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
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
