import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_en from "./en/common.json";
import meta_en from "./en/meta.json";
import validation_en from "./en/validation.json";
import common_el from "./el/common.json";
import meta_el from "./el/meta.json";
import validation_el from "./el/validation.json";

const DETECTION_OPTIONS = {
  order: ["localStorage"],
};

const resources = {
  en: {
    common: common_en,
    validation: validation_en,
    meta: meta_en,
  },
  else: {
    common: common_el,
    validation: validation_el,
    meta: meta_el,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: DETECTION_OPTIONS,
    resources,
    ns: ["common", "validation"],
    defaultNS: "common",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
