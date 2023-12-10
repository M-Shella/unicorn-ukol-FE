import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import cs from './locales/cs'
import en from './locales/en'

export const langs = ['en', 'cs']

i18n.use(initReactI18next).init({
    supportedLngs: langs,
    fallbackLng: langs[0],
    lng: langs[0],
    resources: {
        en: { translation: en },
        cs: { translation: cs },
    },
})

export default i18n
