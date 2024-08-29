import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      translation: {
        welcome: "مرحبا بكم في تطبيقنا",
        // Add other translations here
      }
    }
  },
  lng: "ar",
  fallbackLng: "ar", // Arabic as default language
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
