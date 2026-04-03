import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { MethodMBS } from './MethodMBS';
import { ForWho } from './ForWho';
import { Offers } from './Offers';
import { DiscoveryCall } from './DiscoveryCall';
import { FAQ } from './FAQ';
import { Testimonials } from './Testimonials';
import { client } from '../../lib/sanity';
import { useTranslation } from 'react-i18next';

const Accompagnement: React.FC = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageAccompagnement"][0]`).then((res) => {
      setData(res || {});
    }).catch(() => {
      setData({});
    });
  }, []);

  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.accompagnementHeadline?.visible !== false && <Headline data={data.accompagnementHeadline} lang={i18n.language} />}
      {data.accompagnementMethodMBS?.visible !== false && <MethodMBS data={data.accompagnementMethodMBS} lang={i18n.language} />}
      {data.accompagnementForWho?.visible !== false && <ForWho data={data.accompagnementForWho} lang={i18n.language} />}
      {data.accompagnementOffers?.visible !== false && <Offers data={data.accompagnementOffers} lang={i18n.language} />}
      {data.accompagnementDiscoveryCall?.visible !== false && <DiscoveryCall data={data.accompagnementDiscoveryCall} lang={i18n.language} />}
      {data.accompagnementFAQ?.visible !== false && <FAQ data={data.accompagnementFAQ} lang={i18n.language} />}
      {data.accompagnementTestimonials?.visible !== false && <Testimonials data={data.accompagnementTestimonials} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default Accompagnement;
