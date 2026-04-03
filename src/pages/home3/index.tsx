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

const Home3: React.FC = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageHome3"][0]`).then((res) => {
      setData(res || {});
    }).catch(() => {
      setData({});
    });
  }, []);

  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.home3Hero?.visible !== false && <Hero data={data.home3Hero} lang={i18n.language} />}
      {data.home3About?.visible !== false && <About data={data.home3About} lang={i18n.language} />}
      {data.home3Method?.visible !== false && <Method data={data.home3Method} lang={i18n.language} />}
      {data.home3Testimonials?.visible !== false && <Testimonials data={data.home3Testimonials} lang={i18n.language} />}
      {data.home3CTA?.visible !== false && <CTA data={data.home3CTA} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default Home3;
