import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Hero } from './Hero';
import { StellieIntro } from './StellieIntro';
import { Method } from './Method';
import { Testimonials } from './Testimonials';
import { CTA } from './CTA';
import { client } from '../../lib/sanity';
import { useTranslation } from 'react-i18next';

const Accueil2: React.FC = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageAccueil2"][0]`).then((res) => {
      setData(res || {}); // Fallback to empty object if no doc
    });
  }, []);

  // Display a fallback while loading
  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.accueil2Hero?.visible !== false && <Hero data={data.accueil2Hero} lang={i18n.language} />}
      {data.accueil2StellieIntro?.visible !== false && <StellieIntro data={data.accueil2StellieIntro} lang={i18n.language} />}
      {data.accueil2Method?.visible !== false && <Method data={data.accueil2Method} lang={i18n.language} />}
      {data.accueil2Testimonials?.visible !== false && <Testimonials data={data.accueil2Testimonials} lang={i18n.language} />}
      {data.accueil2CTA?.visible !== false && <CTA data={data.accueil2CTA} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default Accueil2;
