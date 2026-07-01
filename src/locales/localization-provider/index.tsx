import type { FC, PropsWithChildren } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import useLocales from "../use-locales";

type LocalizationProviderProps = PropsWithChildren;

const LocalizationProvider: FC<LocalizationProviderProps> = (props) => {
  const { children } = props;

  const { currentLang } = useLocales();

  return (
    <MuiLocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={currentLang.adapterLocale}
    >
      {children}
    </MuiLocalizationProvider>
  );
};

export default LocalizationProvider;
