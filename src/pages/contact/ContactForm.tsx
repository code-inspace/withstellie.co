import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CheckCircle, XCircle } from 'lucide-react';

export const ContactForm: React.FC<{ data?: any; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.form-elem', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' });
  }, { scope: container });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('https://formsubmit.co/ajax/chrystelbrc.pro@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section data-navbar-theme="light" ref={container} className="py-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-3xl mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-[#2A1A0E]/5"
        >
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="Nouveau message depuis WithStellie" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-elem mb-8">
            <label htmlFor="prenom" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">{data?.[`firstNameLabel_${lang}`]}</label>
            <input type="text" id="prenom" name="Prénom" required className="w-full bg-[#F9F3EC] border border-[#2A1A0E]/10 rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light text-lg" placeholder={data?.[`firstNamePlaceholder_${lang}`]} />
          </div>

          <div className="form-elem mb-8">
            <label htmlFor="email" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">{data?.[`emailLabel_${lang}`]}</label>
            <input type="email" id="email" name="email" required className="w-full bg-[#F9F3EC] border border-[#2A1A0E]/10 rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light text-lg" placeholder={data?.[`emailPlaceholder_${lang}`]} />
          </div>

          <div className="form-elem mb-8">
            <label htmlFor="sujet" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">{data?.[`subjectLabel_${lang}`]}</label>
            <select id="sujet" name="Sujet" className="w-full bg-[#F9F3EC] border border-[#2A1A0E]/10 rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light text-[#2A1A0E]/80 appearance-none cursor-pointer text-lg">
              <option value="Non précisé">{data?.[`subjectPlaceholder_${lang}`]}</option>
              <option value={data?.[`subjectOpt1_${lang}`]}>{data?.[`subjectOpt1_${lang}`]}</option>
              <option value={data?.[`subjectOpt2_${lang}`]}>{data?.[`subjectOpt2_${lang}`]}</option>
              <option value={data?.[`subjectOpt3_${lang}`]}>{data?.[`subjectOpt3_${lang}`]}</option>
            </select>
          </div>

          <div className="form-elem mb-12">
            <label htmlFor="message" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">{data?.[`messageLabel_${lang}`]}</label>
            <textarea id="message" name="Message" required rows={6} className="w-full bg-[#F9F3EC] border border-[#2A1A0E]/10 rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light resize-none text-lg" placeholder={data?.[`messagePlaceholder_${lang}`]}></textarea>
          </div>

          <div className="form-elem flex flex-col items-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full md:w-auto bg-[#2A1A0E] text-[#F5EDE0] px-16 py-5 rounded-full font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#C24C2A] hover:scale-105 mb-6 shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'sending'
                ? (lang === 'en' ? 'Sending…' : 'Envoi…')
                : data?.[`submitBtn_${lang}`]}
            </button>
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A1A0E]/40 text-center mt-2 whitespace-pre-line">
              {data?.[`privacyText_${lang}`]}
            </p>
          </div>
        </form>
      </div>

      {/* Toast */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 ${status === 'success' || status === 'error' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {status === 'success' && (
          <div className="flex items-center gap-3 bg-[#2A1A0E] text-[#F5EDE0] px-6 py-4 rounded-full shadow-2xl text-sm font-medium">
            <CheckCircle size={18} className="text-[#7fc97f] shrink-0" />
            {lang === 'en' ? 'Message sent! I'll get back to you soon.' : 'Message envoyé ! Je te réponds très vite.'}
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-3 bg-[#2A1A0E] text-[#F5EDE0] px-6 py-4 rounded-full shadow-2xl text-sm font-medium">
            <XCircle size={18} className="text-[#C24C2A] shrink-0" />
            {lang === 'en' ? 'Something went wrong. Please try again.' : 'Une erreur est survenue. Réessaie.'}
          </div>
        )}
      </div>
    </section>
  );
};
