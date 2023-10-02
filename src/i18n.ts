import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enNavbarLinks from "./locales/en/navbarLinks.json";
import esNavbarLinks from "./locales/es/navbarLinks.json";
import enHome from "./locales/en/home.json";
import esHome from "./locales/es/home.json";
import enProjectButton from "./locales/en/projectButton.json";
import esProjectButton from "./locales/es/projectButton.json";
import enAbout from "./locales/en/about.json";
import esAbout from "./locales/es/about.json";
import enProjects from "./locales/en/projects.json";
import esProjects from "./locales/es/projects.json";
import enContact from "./locales/en/contact.json";
import esContact from "./locales/es/contact.json";
import enFooter from "./locales/en/footer.json";
import esFooter from "./locales/es/footer.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbarLinks: enNavbarLinks,
        home: enHome,
        projectButton: enProjectButton,
        about: enAbout,
        projects: enProjects,
        contact: enContact,
        footer: enFooter,
      },
      es: {
        navbarLinks: esNavbarLinks,
        home: esHome,
        projectButton: esProjectButton,
        about: esAbout,
        projects: esProjects,
        contact: esContact,
        footer: esFooter,
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
