import React, { useEffect } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Headline } from './Headline';
import { Before } from './Before';
import { TurningPoint } from './TurningPoint';
import { Reconstruction } from './Reconstruction';
import { Why } from './Why';
import { Quote } from './Quote';
import { Method } from './Method';
import { CTA } from './CTA';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      <Headline />
      <Before />
      <TurningPoint />
      <Reconstruction />
      <Why />
      <Quote />
      <Method />
      <CTA />
      <Footer />
    </div>
  );
};

export default About;
