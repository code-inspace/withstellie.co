import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLang = localStorage.getItem('i18nextLng') || 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: {} },
      fr: { translation: {} }
    },
    lng: savedLang, // default to saved
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
