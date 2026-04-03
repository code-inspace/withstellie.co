import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

const Confidentialite: React.FC = () => {
  return (
    <div className="bg-[#F9F3EC] min-h-screen">
      <Navbar />

      <main data-navbar-theme="light" className="pt-40 pb-32 px-8 md:px-16 max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#2A1A0E]/40 mb-6">Légal</p>
        <h1 className="font-display text-5xl md:text-7xl text-[#2A1A0E] leading-[0.95] mb-20">
          Politique de confidentialité.
        </h1>

        <div className="space-y-14 text-[#2A1A0E]/70 font-light leading-relaxed">

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Responsable du traitement</h2>
            <p>
              Chrystel Bruce, <strong className="font-medium text-[#2A1A0E]">withstellie.co</strong><br />
              Email : <a href="mailto:chrystelbrc.pro@gmail.com" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">chrystelbrc.pro@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Données collectées</h2>
            <p>
              Ce site ne collecte aucune donnée personnelle de manière automatique. Les seules données susceptibles d'être recueillies sont celles que vous transmettez volontairement via les formulaires de contact ou de réservation (nom, adresse email, message).
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Finalité du traitement</h2>
            <p>
              Les données collectées sont utilisées exclusivement pour :<br />
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Répondre à vos demandes de contact ou de réservation</li>
              <li>Vous envoyer des informations relatives à l'accompagnement, si vous y avez consenti</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Durée de conservation</h2>
            <p>
              Vos données sont conservées le temps nécessaire à la gestion de votre demande, et supprimées dès qu'elles ne sont plus utiles, dans un délai maximum de 3 ans après le dernier contact.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Cookies et stockage local</h2>
            <p>
              Ce site n'utilise pas de cookies de traçage, de publicité ou d'analyse comportementale. Aucune donnée de navigation n'est transmise à des tiers.
            </p>
            <p className="mt-3">
              Le site utilise le stockage local (<em>localStorage</em>) de votre navigateur uniquement pour mémoriser votre préférence de fermeture du bandeau promotionnel. Cette donnée est purement fonctionnelle, reste sur votre appareil et ne contient aucune information personnelle.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Partage des données</h2>
            <p>
              Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers. Elles peuvent être transmises à des prestataires techniques (hébergement, messagerie) dans le strict respect de la réglementation en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:chrystelbrc.pro@gmail.com" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">
                chrystelbrc.pro@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Réclamation</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#2A1A0E] transition-colors">
                CNIL
              </a>{" "}
              (Commission Nationale de l'Informatique et des Libertés).
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#2A1A0E]/40 mb-4">Mise à jour</h2>
            <p>Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière révision est indiquée ci-dessous.</p>
            <p className="mt-3 text-sm text-[#2A1A0E]/40">Dernière mise à jour : avril 2026</p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Confidentialite;
