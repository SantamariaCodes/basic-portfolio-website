import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enNavbarLinks from "./locales/en/navbarLinks.json";
import esNavbarLinks from "./locales/es/navbarLinks.json";
import enHome from "./locales/en/home.json";
import esHome from "./locales/es/home.json";
import enProjectButton from "./locales/en/projectButton.json";
import esProjectButton from "./locales/es/projectButton.json";
import enAbout from "./locales/en/about.json"
import esAbout from "./locales/es/about.json"
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbarLinks: enNavbarLinks,
        home: enHome,
        projectButton: enProjectButton,
        about: enAbout
      },
      es: {
        navbarLinks: esNavbarLinks,
        home: esHome,
        projectButton: esProjectButton,
        about: esAbout
      },
    },
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;
