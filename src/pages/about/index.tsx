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
import { SEO } from '../../components/SEO';

const About: React.FC = () => {
  const { i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sections, setSections] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`{
      "headline":       coalesce(*[_type == "aboutHeadline"][0],       *[_type == "pageAbout"][0].aboutHeadline)     { ..., backgroundImage { asset-> { url } } },
      "before":         coalesce(*[_type == "aboutBefore"][0],         *[_type == "pageAbout"][0].aboutBefore),
      "turningPoint":   coalesce(*[_type == "aboutTurningPoint"][0],   *[_type == "pageAbout"][0].aboutTurningPoint) { ..., backgroundImage { asset-> { url } } },
      "reconstruction": coalesce(*[_type == "aboutReconstruction"][0], *[_type == "pageAbout"][0].aboutReconstruction),
      "why":            coalesce(*[_type == "aboutWhy"][0],            *[_type == "pageAbout"][0].aboutWhy),
      "quote":          coalesce(*[_type == "aboutQuote"][0],          *[_type == "pageAbout"][0].aboutQuote)         { ..., backgroundImage { asset-> { url } } },
      "method":         coalesce(*[_type == "aboutMethod"][0],         *[_type == "pageAbout"][0].aboutMethod),
      "cta":            coalesce(*[_type == "aboutCTA"][0],            *[_type == "pageAbout"][0].aboutCTA)
    }`).then(setSections).catch(() => setSections({}));
  }, []);

  if (!sections) return <div className="min-h-screen bg-[#F9F3EC]" />;

  const lang = i18n.language;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <SEO
        title="À propos | With Stellie"
        description={lang === 'en'
          ? 'Discover Stellie\'s story — identity shift coach. From burnout to reconstruction, a method built from lived experience.'
          : 'Découvrez l\'histoire de Stellie — coach de shift identitaire. Du burnout à la reconstruction, une méthode née du vécu.'
        }
        canonical={lang === 'en' ? '/en/about' : '/a-propos'}
        lang={lang}
      />
      <Navbar />
      {sections.headline?.visible !== false && <Headline data={sections.headline} lang={lang} />}
      {sections.before?.visible !== false && <Before data={sections.before} lang={lang} />}
      {sections.turningPoint?.visible !== false && <TurningPoint data={sections.turningPoint} lang={lang} />}
      {sections.reconstruction?.visible !== false && <Reconstruction data={sections.reconstruction} lang={lang} />}
      {sections.why?.visible !== false && <Why data={sections.why} lang={lang} />}
      {sections.quote?.visible !== false && <Quote data={sections.quote} lang={lang} />}
      {sections.method?.visible !== false && <Method data={sections.method} lang={lang} />}
      {sections.cta?.visible !== false && <CTA data={sections.cta} lang={lang} />}
      <Footer />
    </div>
  );
};

export default About;
