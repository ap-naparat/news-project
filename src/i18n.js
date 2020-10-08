import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './locales/en'
import translationTH from './locales/th'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: translationEN,
  },
  th: {
    translation: translationTH,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    transSupportBasicHtmlNodes: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
