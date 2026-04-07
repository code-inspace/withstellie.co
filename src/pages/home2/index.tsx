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
import { PageLoader } from '../../components/layout/PageLoader';

const Home2: React.FC = () => {
  const { i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sections, setSections] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`{
      "hero":         coalesce(*[_type == "home2Hero"][0],         *[_type == "pageHome2"][0].home2Hero) { ..., backgroundImage { asset-> { url } } },
      "stellieIntro": coalesce(*[_type == "home2StellieIntro"][0], *[_type == "pageHome2"][0].home2StellieIntro),
      "method":       coalesce(*[_type == "home2Method"][0],       *[_type == "pageHome2"][0].home2Method) { ..., backgroundImage { asset-> { url } } },
      "testimonials": coalesce(*[_type == "home2Testimonials"][0], *[_type == "pageHome2"][0].home2Testimonials),
      "cta":          coalesce(*[_type == "home2CTA"][0],          *[_type == "pageHome2"][0].home2CTA)
    }`).then(setSections).catch(() => setSections({}));
  }, []);

  if (!sections) return <PageLoader />;

  const lang = i18n.language;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {sections.hero?.visible !== false && <Hero data={sections.hero} lang={lang} />}
      {sections.stellieIntro?.visible !== false && <StellieIntro data={sections.stellieIntro} lang={lang} />}
      {sections.method?.visible !== false && <Method data={sections.method} lang={lang} />}
      {sections.testimonials?.visible !== false && <Testimonials data={sections.testimonials} lang={lang} />}
      {sections.cta?.visible !== false && <CTA data={sections.cta} lang={lang} />}
      <Footer />
    </div>
  );
};

export default Home2;
