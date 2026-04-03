import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { Program } from './Program';
import { CalWidget } from './CalWidget';
import { ContactAlt } from './ContactAlt';
import { client } from '../../lib/sanity';
import { useTranslation } from 'react-i18next';

const Reserver: React.FC = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageReserver"][0]`).then((res) => {
      setData(res || {});
    }).catch(() => {
      setData({});
    });
  }, []);

  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.reserverHeadline?.visible !== false && <Headline data={data.reserverHeadline} lang={i18n.language} />}
      {data.reserverProgram?.visible !== false && <Program data={data.reserverProgram} lang={i18n.language} />}
      {data.reserverCalWidget?.visible !== false && <CalWidget data={data.reserverCalWidget} lang={i18n.language} />}
      {data.reserverContactAlt?.visible !== false && <ContactAlt data={data.reserverContactAlt} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default Reserver;
