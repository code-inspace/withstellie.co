import React from 'react';
import { HeroOriginal } from './HeroOriginal';
import { HookOriginal } from './HookOriginal';
import { AboutOriginal } from './AboutOriginal';
import { MethodOriginal } from './MethodOriginal';
import { TestimonialsOriginal } from './TestimonialsOriginal';
import { CTAOriginal } from './CTAOriginal';
import { Footer } from '../../components/layout/Footer';

const Home3: React.FC = () => {
  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <HeroOriginal />
      <HookOriginal />
      <AboutOriginal />
      <MethodOriginal />
      <TestimonialsOriginal />
      <CTAOriginal />
      <Footer />
    </div>
  );
};

export default Home3;
