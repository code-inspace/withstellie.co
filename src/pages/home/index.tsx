import React, { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Method } from "./Method";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";
import { client } from "../../lib/sanity";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sections, setSections] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`{
      "hero":         coalesce(*[_type == "homeHero"][0],         *[_type == "pageHome"][0].homeHero) { ..., backgroundImage { asset-> { url } } },
      "hook":         coalesce(*[_type == "homeHook"][0],         *[_type == "pageHome"][0].homeHook),
      "presentation": coalesce(*[_type == "homePresentation"][0], *[_type == "pageHome"][0].homePresentation),
      "focus":        coalesce(*[_type == "homeFocus"][0],        *[_type == "pageHome"][0].homeFocus),
      "method":       coalesce(*[_type == "homeMethod"][0],       *[_type == "pageHome"][0].homeMethod),
      "testimonials": coalesce(*[_type == "homeTestimonials"][0], *[_type == "pageHome"][0].homeTestimonials),
      "cta":          coalesce(*[_type == "homeCTA"][0],          *[_type == "pageHome"][0].homeCTA),
      "pricing":      coalesce(*[_type == "homePricing"][0],      *[_type == "pageHome"][0].homePricing),
      "faq":          coalesce(*[_type == "homeFAQ"][0],          *[_type == "pageHome"][0].homeFAQ),
      "cta2":         coalesce(*[_type == "homeCTA2"][0],         *[_type == "pageHome"][0].homeCTA2),
      "about":        coalesce(*[_type == "homeAbout"][0],        *[_type == "pageHome"][0].homeAbout)
    }`).then(setSections).catch(() => setSections({}));
  }, []);

  if (!sections) return <div className="min-h-screen bg-[#F9F3EC]" />;

  const lang = i18n.language;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {sections.hero?.visible !== false && <Hero data={sections.hero} lang={lang} />}
      {sections.about?.visible !== false && <About data={sections.about} lang={lang} />}
      {sections.method?.visible !== false && <Method data={sections.method} lang={lang} />}
      {sections.testimonials?.visible !== false && <Testimonials data={sections.testimonials} lang={lang} />}
      {sections.cta?.visible !== false && <CTA data={sections.cta} lang={lang} />}
      <Footer />
    </div>
  );
};

export default Home;
