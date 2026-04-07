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
import { SEO } from '../../components/SEO';

const Coaching: React.FC = () => {
  const { i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sections, setSections] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`{
      "headline":      *[_type == "coachingHeadline"][0],
      "methodMBS":     *[_type == "coachingMethodMBS"][0]    { ..., backgroundImage { asset-> { url } } },
      "forWho":        *[_type == "coachingForWho"][0]       { ..., backgroundImage { asset-> { url } } },
      "testimonials":  *[_type == "coachingTestimonials"][0] { ..., backgroundImage { asset-> { url } } },
      "offers":        *[_type == "coachingOffers"][0],
      "faq":           *[_type == "coachingFAQ"][0],
      "discoveryCall": *[_type == "coachingDiscoveryCall"][0]
    }`).then(setSections).catch(() => setSections({}));
  }, []);

  if (!sections) return <div className="min-h-screen bg-[#F9F3EC]" />;

  const lang = i18n.language;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <SEO
        title="Coaching | With Stellie"
        description={lang === 'en'
          ? 'Individual identity shift coaching. MBS method — Mind · Body · Soul. Book your free discovery call.'
          : 'Coaching individuel de shift identitaire. Méthode MBS — Mind · Body · Soul. Réserve ton appel découverte gratuit.'
        }
        canonical={lang === 'en' ? '/en/work-with-me' : '/coaching'}
        lang={lang}
      />
      <Navbar />
      {sections.headline?.visible !== false && <Headline data={sections.headline} lang={lang} />}
      {sections.methodMBS?.visible !== false && <MethodMBS data={sections.methodMBS} lang={lang} />}
      {sections.forWho?.visible !== false && <ForWho data={sections.forWho} lang={lang} />}
      {sections.offers?.visible !== false && <Offers data={sections.offers} lang={lang} />}
      {sections.discoveryCall?.visible !== false && <DiscoveryCall data={sections.discoveryCall} lang={lang} />}
      {sections.faq?.visible !== false && <FAQ data={sections.faq} lang={lang} />}
      {sections.testimonials?.visible !== false && <Testimonials data={sections.testimonials} lang={lang} />}
      <Footer />
    </div>
  );
};

export default Coaching;
