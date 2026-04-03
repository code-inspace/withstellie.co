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

const Coaching: React.FC = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageCoaching"][0]`).then((res) => {
      setData(res || {});
    }).catch(() => {
      setData({});
    });
  }, []);

  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.coachingHeadline?.visible !== false && <Headline data={data.coachingHeadline} lang={i18n.language} />}
      {data.coachingMethodMBS?.visible !== false && <MethodMBS data={data.coachingMethodMBS} lang={i18n.language} />}
      {data.coachingForWho?.visible !== false && <ForWho data={data.coachingForWho} lang={i18n.language} />}
      {data.coachingOffers?.visible !== false && <Offers data={data.coachingOffers} lang={i18n.language} />}
      {data.coachingDiscoveryCall?.visible !== false && <DiscoveryCall data={data.coachingDiscoveryCall} lang={i18n.language} />}
      {data.coachingFAQ?.visible !== false && <FAQ data={data.coachingFAQ} lang={i18n.language} />}
      {data.coachingTestimonials?.visible !== false && <Testimonials data={data.coachingTestimonials} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default Coaching;
