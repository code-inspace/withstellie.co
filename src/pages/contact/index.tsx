import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { ContactForm } from './ContactForm';
import { Alternatives } from './Alternatives';
import { Redirection } from './Redirection';
import { client } from '../../lib/sanity';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "pageContact"][0]`).then((res) => {
      setData(res || {});
    }).catch(() => {
      setData({});
    });
  }, []);

  if (!data) return <div className="min-h-screen bg-[#F9F3EC]" />;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {data.contactHeadline?.visible !== false && <Headline data={data.contactHeadline} lang={i18n.language} />}
      {data.contactContactForm?.visible !== false && <ContactForm data={data.contactContactForm} lang={i18n.language} />}
      {data.contactAlternatives?.visible !== false && <Alternatives data={data.contactAlternatives} lang={i18n.language} />}
      {data.contactRedirection?.visible !== false && <Redirection data={data.contactRedirection} lang={i18n.language} />}
      <Footer />
    </div>
  );
};

export default Contact;
