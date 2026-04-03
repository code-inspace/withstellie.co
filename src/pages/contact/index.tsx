import React, { useEffect } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { ContactForm } from './ContactForm';
import { Alternatives } from './Alternatives';
import { Redirection } from './Redirection';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      <Headline />
      <ContactForm />
      <Alternatives />
      <Redirection />
      <Footer />
    </div>
  );
};

export default Contact;
