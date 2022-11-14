import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationKo from './translationKo.json';
import translationEn from './translationEn.json';

const resources = {
  ko: {
    translation: translationKo,
  },
  en: {
    translation: translationEn,
  }
}

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'ko',
  fallbackLng: 'ko',
  debug: true,
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;