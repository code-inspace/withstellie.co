import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

const OffreAvril: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ prenom: "", email: "", message: "" });

  // Noindex — page temporaire
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connecter à Calendly, Notion ou un service email (ex. Resend, Formspree)
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F9F3EC] min-h-screen font-sans text-[#2A1A0E]">

      {/* Logo */}
      <div className="flex justify-center pt-10 pb-0 px-6">
        <Link to="/">
          <img src="/logo.png" alt="WithStellie.co" className="h-5 w-auto object-contain brightness-0" />
        </Link>
      </div>

      {/* 01 — Headline urgence douce */}
      <section className="pt-20 pb-16 px-6 md:px-12 max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-8">
          Disponible du 7 au 30 avril 2026
        </p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1] tracking-tight text-[#2A1A0E] mb-8">
          Une offre pour avril.
        </h1>
        <p className="text-xl md:text-2xl font-light text-[#2A1A0E]/70 leading-relaxed max-w-xl mx-auto">
          Parce que certaines d'entre vous attendent depuis trop longtemps.
          {/* ✏️ Stellie — modifier ce texte */}
        </p>
      </section>

      <div className="w-12 h-px bg-[#2A1A0E]/15 mx-auto" />

      {/* 02 — Ce que l'offre contient */}
      <section className="py-16 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#C24C2A] mb-8">Ce que tu reçois</p>

        {/* ✏️ Stellie — remplacer par le contenu réel de l'offre */}
        <div className="space-y-6">
          {[
            { label: "Durée", value: "X semaines · X sessions" },
            { label: "Format", value: "1:1, en visio ou en présentiel" },
            { label: "Ce qui est inclus", value: "À compléter par Stellie" },
            { label: "Prix", value: "XXX €" },
            { label: "Ce qui la distingue", value: "À compléter par Stellie" },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-6 items-baseline border-b border-[#2A1A0E]/8 pb-6">
              <span className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 w-40 flex-shrink-0">{label}</span>
              <span className="text-lg font-light text-[#2A1A0E]">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="w-12 h-px bg-[#2A1A0E]/15 mx-auto" />

      {/* 03 — Pour qui */}
      <section className="py-16 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#C24C2A] mb-8">Cette offre est faite pour toi si</p>
        {/* ✏️ Stellie — 2-3 lignes de qualification */}
        <p className="text-xl md:text-2xl font-display font-normal italic text-[#2A1A0E]/80 leading-relaxed">
          Tu sens que quelque chose doit changer, mais tu ne sais pas encore par où commencer.
          Tu es prêt·e à t'investir, pas juste à "essayer".
          Tu cherches un accompagnement humain, pas une méthode de plus.
        </p>
      </section>

      <div className="w-12 h-px bg-[#2A1A0E]/15 mx-auto" />

      {/* 04 — CTA + Formulaire */}
      <section className="py-16 px-6 md:px-12 max-w-xl mx-auto" id="inscription">

        {submitted ? (
          <div className="text-center py-12">
            <p className="font-display text-4xl text-[#2A1A0E] mb-4">C'est noté.</p>
            <p className="text-[#2A1A0E]/60 font-light">
              Stellie te contacte sous 48 h pour confirmer ta place.
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs uppercase tracking-widest text-[#C24C2A] mb-8 text-center">Réserver ma place</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-2">Prénom</label>
                <input
                  type="text"
                  required
                  value={form.prenom}
                  onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
                  className="w-full bg-transparent border-b border-[#2A1A0E]/20 py-3 text-[#2A1A0E] placeholder-[#2A1A0E]/30 focus:outline-none focus:border-[#C24C2A] transition-colors"
                  placeholder="Ton prénom"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-transparent border-b border-[#2A1A0E]/20 py-3 text-[#2A1A0E] placeholder-[#2A1A0E]/30 focus:outline-none focus:border-[#C24C2A] transition-colors"
                  placeholder="ton@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-2">
                  Dis-moi en quelques mots où tu en es <span className="normal-case tracking-normal opacity-60">(facultatif)</span>
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-transparent border-b border-[#2A1A0E]/20 py-3 text-[#2A1A0E] placeholder-[#2A1A0E]/30 focus:outline-none focus:border-[#C24C2A] transition-colors resize-none"
                  placeholder="Ce n'est pas un formulaire de candidature. Juste un premier contact."
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C24C2A] text-[#F5EDE0] rounded-full font-medium hover:bg-[#D35C38] hover:scale-[1.02] transition-all duration-300"
                >
                  Je veux cette place
                </button>
              </div>
            </form>
          </>
        )}
      </section>

      {/* 05 — Micro-réassurance */}
      <section className="pb-20 px-6 text-center max-w-sm mx-auto">
        <p className="text-sm font-light text-[#2A1A0E]/50 leading-relaxed">
          Tu peux poser toutes tes questions avant de t'engager.{" "}
          <a href="mailto:chrystelbrc.pro@gmail.com" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">
            Par email
          </a>
          {" "}ou sur{" "}
          <a href="https://instagram.com/shift.withstellie" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">
            Instagram
          </a>.
        </p>
      </section>

      {/* Footer minimaliste */}
      <div className="border-t border-[#2A1A0E]/8 py-8 px-6 flex justify-center gap-6 text-xs text-[#2A1A0E]/30">
        <Link to="/legal-notice" className="hover:text-[#2A1A0E]/60 transition-colors">Mentions légales</Link>
        <span>·</span>
        <Link to="/privacy-policy" className="hover:text-[#2A1A0E]/60 transition-colors">Confidentialité</Link>
      </div>

    </div>
  );
};

export default OffreAvril;
