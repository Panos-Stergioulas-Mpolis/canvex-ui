import { formatInTimeZone } from "date-fns-tz";
import { el, enGB } from "date-fns/locale";

const locales = {
  en: enGB,
  el: el,
};

export const formatDateAndTime = (
  date: Date,
  format: string,
  timezone: string,
  language: string,
) => {
  const locale = locales[language as keyof typeof locales];
  return formatInTimeZone(date, timezone, format, { locale });
};
