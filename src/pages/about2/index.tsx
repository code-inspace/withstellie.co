import React from "react";
import { Hook } from "../home/Hook";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

const About: React.FC = () => {
  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      <section data-navbar-theme="light" className="pt-40 pb-24 px-8 md:px-16 bg-[#F9F3EC]">
        <p className="text-sm uppercase tracking-widest text-[#2A1A0E]/40 mb-6">À propos</p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] text-[#2A1A0E] leading-[0.9] tracking-tight">
          Stellie.
        </h1>
      </section>
      <Hook />
      <Footer />
    </div>
  );
};

export default About;
