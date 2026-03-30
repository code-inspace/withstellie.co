import React from "react";
import { Hero } from "./Hero";
import { Hook } from "./Hook";
import { About } from "./About";
import { Method } from "./Method";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";
import { CTA2 } from "./CTA2";
import { Footer } from "../../components/layout/Footer";

const Home3: React.FC = () => {
  return (
    <div className="bg-[#F9F3EC] min-h-screen font-nightingale">
      <Hero />
      <Hook />
      <About />
      <Method />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home3;
