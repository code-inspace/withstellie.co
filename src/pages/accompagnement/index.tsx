import React, { useEffect } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { MethodMBS } from './MethodMBS';
import { ForWho } from './ForWho';
import { Offers } from './Offers';
import { DiscoveryCall } from './DiscoveryCall';
import { FAQ } from './FAQ';
import { Testimonials } from './Testimonials';

const Accompagnement: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      <Headline />
      <MethodMBS />
      <ForWho />
      <Offers />
      <DiscoveryCall />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Accompagnement;
