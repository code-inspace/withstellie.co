import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { Before } from './Before';
import { TurningPoint } from './TurningPoint';
import { Reconstruction } from './Reconstruction';
import { Why } from './Why';
import { Quote } from './Quote';
import { Method } from './Method';
import { CTA } from './CTA';
import { client } from '../../lib/sanity';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageAbout"][0]`).then((res) => {
      setData(res || {});
    }).catch(() => {
      setData({});
    });
  }, []);

  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.aboutHeadline?.visible !== false && <Headline data={data.aboutHeadline} lang={i18n.language} />}
      {data.aboutBefore?.visible !== false && <Before data={data.aboutBefore} lang={i18n.language} />}
      {data.aboutTurningPoint?.visible !== false && <TurningPoint data={data.aboutTurningPoint} lang={i18n.language} />}
      {data.aboutReconstruction?.visible !== false && <Reconstruction data={data.aboutReconstruction} lang={i18n.language} />}
      {data.aboutWhy?.visible !== false && <Why data={data.aboutWhy} lang={i18n.language} />}
      {data.aboutQuote?.visible !== false && <Quote data={data.aboutQuote} lang={i18n.language} />}
      {data.aboutMethod?.visible !== false && <Method data={data.aboutMethod} lang={i18n.language} />}
      {data.aboutCTA?.visible !== false && <CTA data={data.aboutCTA} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default About;
