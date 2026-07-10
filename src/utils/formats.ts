import i18n from "src/locales/i18n";
import { formatInTimeZone } from "date-fns-tz";
import { el, enGB } from "date-fns/locale";

const locales = {
  en: { tz: "Europe/London", lang: enGB },
  el: { tz: "Europe/Athens", lang: el },
};

const selectedLanguage = i18n.language;

export const formatDateAndTime = (date: Date, format: string) => {
  const locale = locales[selectedLanguage as keyof typeof locales];
  return formatInTimeZone(date, locale.tz, format, { locale: locale.lang });
};
