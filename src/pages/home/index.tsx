import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { SEO } from "../../components/SEO";
import { Hero } from "./Hero";
import { About } from "./About";
import { Method } from "../home2/Method";
import { Testimonials } from "../home2/Testimonials";
import { CTA } from "./CTA";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";
import { client } from "../../lib/sanity";
import { useTranslation } from "react-i18next";
import { PageLoader } from "../../components/layout/PageLoader";

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
      "method":       coalesce(*[_type == "home2Method"][0],       *[_type == "pageHome2"][0].home2Method) { ..., backgroundImage { asset-> { url } } },
      "testimonials": coalesce(*[_type == "home2Testimonials"][0], *[_type == "pageHome2"][0].home2Testimonials),
      "cta":          coalesce(*[_type == "homeCTA"][0],          *[_type == "pageHome"][0].homeCTA) { ..., backgroundImage { asset-> { url } } },
      "pricing":      coalesce(*[_type == "homePricing"][0],      *[_type == "pageHome"][0].homePricing),
      "faq":          coalesce(*[_type == "homeFAQ"][0],          *[_type == "pageHome"][0].homeFAQ),
      "cta2":         coalesce(*[_type == "homeCTA2"][0],         *[_type == "pageHome"][0].homeCTA2),
      "about":        coalesce(*[_type == "homeAbout"][0],        *[_type == "pageHome"][0].homeAbout) { ..., image { asset-> { url } } }
    }`).then(setSections).catch(() => setSections({}));
  }, []);

  if (!sections) return <PageLoader />;

  const lang = i18n.language;

  const isEn = lang === 'en';

  return (
    <div id="main-content" className="bg-[#F9F3EC] min-h-screen overflow-x-hidden">
      <SEO
        title="Stellie | Coaching de shift identitaire"
        description={isEn
          ? 'Identity shift coaching for women and queer individuals ready to rewrite their story. MBS method — Mind · Body · Soul.'
          : 'Coaching de shift identitaire pour les femmes et personnes queer prêtes à réécrire leur histoire. Méthode MBS — Mind · Body · Soul.'
        }
        canonical="/"
        lang={lang}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Stellie",
          "jobTitle": "Coach de shift identitaire",
          "url": "https://withstellie.co",
          "image": "https://withstellie.co/hero.jpg",
          "sameAs": ["https://instagram.com/shift.withstellie"],
          "offers": {
            "@type": "Offer",
            "url": "https://withstellie.co/coaching",
            "name": "Coaching individuel — Méthode MBS"
          }
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero — dark */}
      {sections.hero?.visible !== false && <Hero data={sections.hero} lang={lang} />}

      {/* About zone — cream #F9F3EC */}
      <div className="bg-[#F9F3EC]">
        {sections.about?.visible !== false && <About data={sections.about} lang={lang} />}
      </div>

      {/* Method — full width dark, wave built-in at bottom */}
      {sections.method?.visible !== false && <Method data={sections.method} lang={lang} />}

      {/* Testimonials zone — warm #EDE7DF */}
      <div className="bg-[#EDE7DF]">
        {sections.testimonials?.visible !== false && <Testimonials data={sections.testimonials} lang={lang} />}
        {sections.cta?.visible !== false && <CTA data={sections.cta} lang={lang} />}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
