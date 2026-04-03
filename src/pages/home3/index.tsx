import React from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Method } from "./Method";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";

const Home3: React.FC = () => {
  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Method />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home3;
