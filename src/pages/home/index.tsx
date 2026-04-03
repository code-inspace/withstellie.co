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
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageHome"][0]`).then((res) => {
      setData(res || {});
    }).catch(() => {
      setData({});
    });
  }, []);

  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.homeHero?.visible !== false && <Hero data={data.homeHero} lang={i18n.language} />}
      {data.homeAbout?.visible !== false && <About data={data.homeAbout} lang={i18n.language} />}
      {data.homeMethod?.visible !== false && <Method data={data.homeMethod} lang={i18n.language} />}
      {data.homeTestimonials?.visible !== false && <Testimonials data={data.homeTestimonials} lang={i18n.language} />}
      {data.homeCTA?.visible !== false && <CTA data={data.homeCTA} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default Home;
