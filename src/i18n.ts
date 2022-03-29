import i18n from 'i18next';
import httpBackend from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { isBrowser } from '@utils/utils';
import { isDev } from '@utils/env.util';

i18n
  .use(httpBackend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    load: 'currentOnly',
    fallbackLng: 'ru',
    lng: (isBrowser && window.localStorage.i18nextLng) || 'ru',
    debug: isDev,
    ns: ['common', 'translation'],
    defaultNS: 'translation',
    react: {
      useSuspense: false,
    },
  });

export default i18n;
