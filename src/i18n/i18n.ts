import i18n from 'i18next';
import en from './en/translation.json';
import fr from './fr/translation.json';
import ar from './ar/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
    en: {
        translation: en
    },
    fr: {
        translation: fr
    },
    ar: {
        translation: ar
    }
};

i18n.use(initReactI18next).init({
    lng: 'en',
    ns: ['ns1', 'ns2'],
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
});

// import i18n from "i18next";
// import { reactI18nextModule } from "react-i18next";
//
// import translationEN from '../public/i18n/en/translation.json';
// import translationFR from '../public/i18n/en/translation.json';
// import translationAR from '../public/i18n/en/translation.json';
//
// // the translations
// const resources = {
//     en: {
//         translation: translationEN
//     },
//     fr: {
//         translation: translationFR
//     },
//     ar: {
//         translation: translationAR
//     }
// };
//
// i18n
//     .use(reactI18nextModule) // passes i18n down to react-i18next
//     .init({
//         resources,
//         lng: "en",
//
//         keySeparator: false, // we do not use keys in form messages.welcome
//
//         interpolation: {
//             escapeValue: false // react already safes from xss
//         }
//     });
//
// export default i18n;