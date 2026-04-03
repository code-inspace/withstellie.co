import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

const MentionsLegales: React.FC = () => {
  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />

      <main data-navbar-theme="light" className="pt-40 pb-32 px-8 md:px-16 max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#2A1A0E]/40 mb-6">Légal</p>
        <h1 className="font-display text-5xl md:text-7xl text-[#2A1A0E] leading-[0.95] mb-20">
          Mentions légales.
        </h1>

        <div className="space-y-14 text-[#2A1A0E]/70 font-light leading-relaxed">

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Éditeur du site</h2>
            <p>Le site <strong className="font-medium text-[#2A1A0E]">withstellie.co</strong> est édité par :</p>
            <p className="mt-3">
              Chrystel Bruce<br />
              Activité de coaching, auto-entrepreneur<br />
              Email : <a href="mailto:chrystelbrc.pro@gmail.com" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">chrystelbrc.pro@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong className="font-medium text-[#2A1A0E]">Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, visuels, identité visuelle) est la propriété exclusive de withstellie.co, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Données personnelles</h2>
            <p>
              Ce site ne collecte aucune donnée personnelle sans votre consentement. Pour toute demande relative à vos données, vous pouvez contacter : <a href="mailto:chrystelbrc.pro@gmail.com" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">chrystelbrc.pro@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de traçage ou publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Conception & développement</h2>
            <p>
              Site conçu et développé par{" "}
              <a href="https://axelcoudair.com" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">
                Axel Coudair
              </a>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
