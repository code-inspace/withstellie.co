import React, { useEffect } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { Program } from './Program';
import { CalWidget } from './CalWidget';
import { ContactAlt } from './ContactAlt';

const Reserver: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      <Headline />
      <Program />
      <CalWidget />
      <ContactAlt />
      <Footer />
    </div>
  );
};

export default Reserver;
