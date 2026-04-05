import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { useTranslation } from "react-i18next";
import { client } from "../../lib/sanity";

const LegalNotice: React.FC = () => {
  const [data, setData] = useState<any>({});
  const { i18n } = useTranslation();
  const lang = i18n.language || 'fr';

  useEffect(() => {
    client.fetch(`*[_type == "pageLegalNotice"][0]`)
      .then((res) => {
        if (res) setData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />

      <main data-navbar-theme="light" className="pt-40 pb-32 px-8 md:px-16 max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#2A1A0E]/40 mb-6">
           {data?.[`topLabel_${lang}`]}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-[#2A1A0E] leading-[0.95] mb-20 whitespace-pre-line">
           {data?.[`title_${lang}`]}
        </h1>

        <div className="space-y-14 text-[#2A1A0E]/70 font-light leading-relaxed">

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
              {data?.[`section1Title_${lang}`]}
            </h2>
            <p className="whitespace-pre-line">
              {data?.[`section1Text_${lang}`]}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
              {data?.[`section2Title_${lang}`]}
            </h2>
            <p className="whitespace-pre-line">
              {data?.[`section2Text_${lang}`]}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section3Title_${lang}`]}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section3Text_${lang}`]}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section4Title_${lang}`]}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section4Text_${lang}`]}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section5Title_${lang}`]}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section5Text_${lang}`]}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">
               {data?.[`section6Title_${lang}`]}
            </h2>
            <p className="whitespace-pre-line">
               {data?.[`section6Text_${lang}`]}
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalNotice;
