import React, { useRef, useState, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsap';
import { CheckCircle, XCircle, X } from 'lucide-react';
import type { ContactForm as ContactFormData } from '../../types/sanity';

type Status = 'idle' | 'sending' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm: React.FC<{ data?: ContactFormData; lang?: string }> = ({ data, lang = 'fr' }) => {
  const container = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%', toggleActions: 'play none none reverse' }
    });
    tl.fromTo('.form-elem', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' });
  }, { scope: container });

  const validate = useCallback((name: string, value: string): string => {
    if (!value.trim()) return lang === 'en' ? 'Required' : 'Obligatoire';
    if (name === 'email' && !EMAIL_RE.test(value))
      return lang === 'en' ? 'Invalid email' : 'Email invalide';
    return '';
  }, [lang]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const err = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;

    // Full validation before submit
    const form = e.currentTarget;
    const fd = new FormData(form);
    const newErrors: Record<string, string> = {};
    for (const [name, value] of fd.entries()) {
      const err = validate(name, String(value));
      if (err) newErrors[name] = err;
    }
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setStatus('sending');
    const body = Object.fromEntries(fd.entries());

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
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputCls = (name: string) =>
    `w-full bg-[#F9F3EC] border rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light text-lg ${
      errors[name] ? 'border-[#C24C2A]' : 'border-[#2A1A0E]/10'
    }`;

  return (
    <section data-navbar-theme="light" ref={container} className="py-24 px-6 md:px-16 bg-[#F9F3EC]">
      <div className="max-w-3xl mx-auto">
        <form ref={formRef} onSubmit={handleSubmit} noValidate
          className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-[#2A1A0E]/5">
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="Nouveau message depuis WithStellie" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-elem mb-8">
            <label htmlFor="prenom" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">
              {data?.[`firstNameLabel_${lang}` as keyof ContactFormData] as string}
              <span className="text-[#C24C2A] ml-1" aria-hidden="true">*</span>
            </label>
            <input type="text" id="prenom" name="Prénom" required onBlur={handleBlur}
              aria-describedby={errors['Prénom'] ? 'err-prenom' : undefined}
              aria-invalid={!!errors['Prénom']}
              className={inputCls('Prénom')}
              placeholder={data?.[`firstNamePlaceholder_${lang}` as keyof ContactFormData] as string} />
            {errors['Prénom'] && <p id="err-prenom" role="alert" className="text-[#C24C2A] text-xs mt-2 font-medium">{errors['Prénom']}</p>}
          </div>

          <div className="form-elem mb-8">
            <label htmlFor="email" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">
              {data?.[`emailLabel_${lang}` as keyof ContactFormData] as string}
              <span className="text-[#C24C2A] ml-1" aria-hidden="true">*</span>
            </label>
            <input type="email" id="email" name="email" required onBlur={handleBlur}
              aria-describedby={errors['email'] ? 'err-email' : undefined}
              aria-invalid={!!errors['email']}
              className={inputCls('email')}
              placeholder={data?.[`emailPlaceholder_${lang}` as keyof ContactFormData] as string} />
            {errors['email'] && <p id="err-email" role="alert" className="text-[#C24C2A] text-xs mt-2 font-medium">{errors['email']}</p>}
          </div>

          <div className="form-elem mb-8">
            <label htmlFor="sujet" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">
              {data?.[`subjectLabel_${lang}` as keyof ContactFormData] as string}
            </label>
            <select id="sujet" name="Sujet"
              className="w-full bg-[#F9F3EC] border border-[#2A1A0E]/10 rounded-xl px-6 py-4 outline-none focus:border-[#C24C2A] transition-colors font-light text-[#2A1A0E]/80 appearance-none cursor-pointer text-lg">
              <option value="">{data?.[`subjectPlaceholder_${lang}` as keyof ContactFormData] as string}</option>
              <option>{data?.[`subjectOpt1_${lang}` as keyof ContactFormData] as string}</option>
              <option>{data?.[`subjectOpt2_${lang}` as keyof ContactFormData] as string}</option>
              <option>{data?.[`subjectOpt3_${lang}` as keyof ContactFormData] as string}</option>
            </select>
          </div>

          <div className="form-elem mb-12">
            <label htmlFor="message" className="block text-sm uppercase tracking-widest font-medium text-[#2A1A0E] mb-3">
              {data?.[`messageLabel_${lang}` as keyof ContactFormData] as string}
              <span className="text-[#C24C2A] ml-1" aria-hidden="true">*</span>
            </label>
            <textarea id="message" name="Message" required rows={6} onBlur={handleBlur}
              aria-describedby={errors['Message'] ? 'err-message' : undefined}
              aria-invalid={!!errors['Message']}
              className={`${inputCls('Message')} resize-none`}
              placeholder={data?.[`messagePlaceholder_${lang}` as keyof ContactFormData] as string} />
            {errors['Message'] && <p id="err-message" role="alert" className="text-[#C24C2A] text-xs mt-2 font-medium">{errors['Message']}</p>}
          </div>

          <div className="form-elem flex flex-col items-center">
            <button type="submit"
              disabled={status === 'sending'}
              aria-busy={status === 'sending'}
              className="w-full md:w-auto bg-[#2A1A0E] text-[#F5EDE0] px-8 py-3 md:px-16 md:py-5 rounded-full font-medium uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#C24C2A] hover:scale-105 mb-6 shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'sending'
                ? (lang === 'en' ? 'Sending…' : 'Envoi…')
                : data?.[`submitBtn_${lang}` as keyof ContactFormData] as string}
            </button>
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A1A0E]/40 text-center mt-2 whitespace-pre-line">
              {data?.[`privacyText_${lang}` as keyof ContactFormData] as string}
            </p>
          </div>
        </form>
      </div>

      {/* Toast — aria-live so screen readers announce it */}
      <div role="status" aria-live="polite" aria-atomic="true"
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 ${
          status === 'success' || status === 'error'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {(status === 'success' || status === 'error') && (
          <div className="flex items-center gap-3 bg-[#2A1A0E] text-[#F5EDE0] pl-6 pr-4 py-4 rounded-full shadow-2xl text-sm font-medium">
            {status === 'success'
              ? <CheckCircle size={18} className="text-[#7fc97f] shrink-0" />
              : <XCircle size={18} className="text-[#C24C2A] shrink-0" />
            }
            <span>
              {status === 'success'
                ? (lang === 'en' ? "Message sent! I\u2019ll get back to you soon." : 'Message envoyé\u00a0! Je te réponds très vite.')
                : (lang === 'en' ? 'Something went wrong. Please try again.' : 'Une erreur est survenue. Réessaie.')
              }
            </span>
            <button
              onClick={() => setStatus('idle')}
              aria-label={lang === 'en' ? 'Close notification' : 'Fermer la notification'}
              className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
