import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const currentLng = localStorage.getItem("it-academy-lng") || "uz";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: currentLng,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "it-academy-lng", // LocalStorage uchun custom key
      caches: ["localStorage"], // Tilni localStorage-ga avtomatik saqlash
    },
  });

export default i18n;
