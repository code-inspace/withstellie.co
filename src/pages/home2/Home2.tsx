import React from 'react';
import { S01Hero } from './S01Hero';
import { S02Hook } from './S02Hook';
import { S03About } from './S03About';
import { S04Method } from './S04Method';
import { S05Testimonials } from './S05Testimonials';
import { S06CTA } from './S06CTA';
import { S07Footer } from './S07Footer';

const Home2: React.FC = () => {
  return (
    <div className="bg-[#040D18] min-h-screen">
      <S01Hero />
      <S02Hook />
      <S03About />
      <S04Method />
      <S05Testimonials />
      <S06CTA />
      <S07Footer />
    </div>
  );
};

export default Home2;
