import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ContactForm: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.form-elem', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' });
  }, { scope: container });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Provide some context to the email struct
    const payload = {
      _subject: formData.get('sujet') ? `Nouveau message: ${formData.get('sujet')}` : 'Nouveau message du site WithStellie',
      ...Object.fromEntries(formData)
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/chrystelbrc.pro@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        // Reset after 5s
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section ref={container} className="py-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-[#2A1A0E]/5">
          <input type="hidden" name="_template" value="table" />
          
          <div className="form-elem mb-8">
            <label htmlFor="prenom" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">Prénom</label>
            <input type="text" id="prenom" name="Prénom" required className="w-full bg-[#F9F3EC] border border-[#2A1A0E]/10 rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light text-lg" placeholder="Ton prénom" />
          </div>

          <div className="form-elem mb-8">
            <label htmlFor="email" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">Email</label>
            <input type="email" id="email" name="Email" required className="w-full bg-[#F9F3EC] border border-[#2A1A0E]/10 rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light text-lg" placeholder="Ton adresse email" />
          </div>

          <div className="form-elem mb-8">
            <label htmlFor="sujet" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">Sujet (optionnel)</label>
            <select id="sujet" name="Sujet" className="w-full bg-[#F9F3EC] border border-[#2A1A0E]/10 rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light text-[#2A1A0E]/80 appearance-none cursor-pointer text-lg">
              <option value="Non précisé">Sélectionne un sujet</option>
              <option value="Une question sur l'accompagnement">Une question sur l'accompagnement</option>
              <option value="Je ne sais pas quelle offre choisir">Je ne sais pas quelle offre choisir</option>
              <option value="Autre chose">Autre chose</option>
            </select>
          </div>

          <div className="form-elem mb-12">
            <label htmlFor="message" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">Message</label>
            <textarea id="message" name="Message" required rows={6} className="w-full bg-[#F9F3EC] border border-[#2A1A0E]/10 rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light resize-none text-lg" placeholder="Ton message..."></textarea>
          </div>

          <div className="form-elem flex flex-col items-center">
            {status === 'success' && (
              <div className="w-full mb-6 p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium">
                Message envoyé avec succès. Je te réponds au plus vite !
              </div>
            )}
            {status === 'error' && (
              <div className="w-full mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-center font-medium">
                Erreur lors de l'envoi. Tu peux m'écrire directement sur Instagram ou par email.
              </div>
            )}

            <button type="submit" disabled={status === 'loading'} className={`w-full md:w-auto bg-[#2A1A0E] text-[#F5EDE0] px-16 py-5 rounded-full font-medium uppercase tracking-widest text-sm transition-all duration-300 shadow-md ${status === 'loading' ? 'opacity-70 cursor-wait' : 'hover:bg-[#C24C2A] hover:scale-105'}`}>
              {status === 'loading' ? 'Envoi...' : 'Envoyer'}
            </button>
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A1A0E]/40 text-center mt-6">
              Tes informations restent confidentielles.<br/>Je ne les partage avec personne.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
