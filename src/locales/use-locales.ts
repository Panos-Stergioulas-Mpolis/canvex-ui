import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { allLangs, defaultLang } from './languages';

export default function useLocales() {
  const { i18n, t } = useTranslation();

  const foundLang = i18n.language;

  const currentLang =
    allLangs.find((lang) => lang.value === foundLang) || defaultLang;

  const onChangeLang = useCallback(
    (newlang: string) => {
      i18n.changeLanguage(newlang);
    },
    [i18n]
  );

  return {
    i18n,
    allLangs,
    t,
    currentLang,
    onChangeLang,
  };
}
