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
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageBooking"][0]`).then((res) => {
      setData(res || {});
    }).catch(() => {
      setData({});
    });
  }, []);

  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.bookingHeadline?.visible !== false && <Headline data={data.bookingHeadline} lang={i18n.language} />}
      {data.bookingProgram?.visible !== false && <Program data={data.bookingProgram} lang={i18n.language} />}
      {data.bookingCalWidget?.visible !== false && <CalWidget data={data.bookingCalWidget} lang={i18n.language} />}
      {data.bookingContactAlt?.visible !== false && <ContactAlt data={data.bookingContactAlt} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default Booking;
