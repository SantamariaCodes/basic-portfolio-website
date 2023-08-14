import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enNavbar from "./locales/en/navbar.json";
import esNavbar from "./locales/es/navbar.json";
import enNavbarLinks from "./locales/en/navbarLinks.json";
import esNavbarLinks from "./locales/es/navbarLinks.json";
import enHome from "./locales/en/home.json";
import esHome from "./locales/es/home.json";
import enProjectButton from "./locales/en/projectButton.json";
import esProjectButton from "./locales/es/projectButton.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: enNavbar,
        navbarLinks: enNavbarLinks,
        home: enHome,
        projectButton: enProjectButton
      },
      es: {
        navbar: esNavbar,
        navbarLinks: esNavbarLinks,
        home: esHome,
        projectButton: esProjectButton 
      },
    },
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

  console.log('Resources:', i18n.options.resources);

export default i18n;
