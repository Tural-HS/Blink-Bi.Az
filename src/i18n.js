import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      salam: "Hello",
    },
  },

  az: {
    translation: {
      salam: "Salam",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18n;
