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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sections, setSections] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`{
      "headline":    coalesce(*[_type == "contactHeadline"][0],     *[_type == "pageContact"][0].contactHeadline),
      "form":        coalesce(*[_type == "contactContactForm"][0],  *[_type == "pageContact"][0].contactContactForm),
      "alternatives":coalesce(*[_type == "contactAlternatives"][0], *[_type == "pageContact"][0].contactAlternatives),
      "redirection": coalesce(*[_type == "contactRedirection"][0],  *[_type == "pageContact"][0].contactRedirection)
    }`).then(setSections).catch(() => setSections({}));
  }, []);

  if (!sections) return <div className="min-h-screen bg-[#F9F3EC]" />;

  const lang = i18n.language;

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      {sections.headline?.visible !== false && <Headline data={sections.headline} lang={lang} />}
      {sections.form?.visible !== false && <ContactForm data={sections.form} lang={lang} />}
      {sections.alternatives?.visible !== false && <Alternatives data={sections.alternatives} lang={lang} />}
      {sections.redirection?.visible !== false && <Redirection data={sections.redirection} lang={lang} />}
      <Footer />
    </div>
  );
};

export default Contact;
