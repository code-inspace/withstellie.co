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

const Home2: React.FC = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageHome2"][0]`).then((res) => {
      setData(res || {}); // Fallback to empty object if no doc
    });
  }, []);

  // Display a fallback while loading
  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.home2Hero?.visible !== false && <Hero data={data.home2Hero} lang={i18n.language} />}
      {data.home2StellieIntro?.visible !== false && <StellieIntro data={data.home2StellieIntro} lang={i18n.language} />}
      {data.home2Method?.visible !== false && <Method data={data.home2Method} lang={i18n.language} />}
      {data.home2Testimonials?.visible !== false && <Testimonials data={data.home2Testimonials} lang={i18n.language} />}
      {data.home2CTA?.visible !== false && <CTA data={data.home2CTA} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default Home2;
