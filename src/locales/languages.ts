import {
  enUS as enUSDate,
  elGR as elGRDate,
} from "@mui/x-date-pickers/locales";

import { enGB as enGBAdapter, el as elAdapter } from "date-fns/locale";

export const allLangs = [
  {
    label: "English",
    value: "en",
    systemValue: {
      components: {
        ...enUSDate.components,
      },
    },
    adapterLocale: enGBAdapter,
    icon: "flagpack:gb-ukm",
  },
  {
    label: "Greek",
    value: "el",
    systemValue: {
      components: {
        ...elGRDate.components,
      },
    },
    adapterLocale: elAdapter,
    icon: "flagpack:el",
  },
];

export const defaultLang = allLangs[0];
