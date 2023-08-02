import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enNavbar from "./locales/en/navbar.json";
import esNavbar from "./locales/es/navbar.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { navbar: enNavbar },
      es: { navbar: esNavbar },
    },
    lng: "en", // if 'en' is your default language
    fallbackLng: "en", // use 'en' if translations in current language not available
    keySeparator: false, // we do not use keys in the form of messages.welcome
    interpolation: {
      escapeValue: false // react already saves from xss
    }
  });

export default i18n;
