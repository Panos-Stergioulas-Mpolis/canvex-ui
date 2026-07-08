import type { FC, PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import {
  type RenderResult,
  type RenderOptions,
  render as rtlRender,
} from "@testing-library/react";

import { type AppStore, type RootState, setupStore } from "src/store/store";

import ThemeProvider from "src/theme/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "src/locales/i18n";
import LocalizationProvider from "src/locales/localization-provider";

type CustomRenderOptions = {
  renderOptions?: Omit<RenderOptions, "wrapper">;
  preloadedState?: Partial<RootState>;
  store?: AppStore;
  initialEntries?: string[];
  initialIndex?: number;
};

type CustomRenderResult = RenderResult & { store: AppStore };

const render = (
  ui: ReactElement,

  {
    preloadedState = {},
    store = setupStore(preloadedState),
    initialEntries,
    initialIndex,
    ...renderOptions
  }: CustomRenderOptions = {},
): CustomRenderResult => {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>
            <LocalizationProvider>
              <MemoryRouter
                initialEntries={initialEntries}
                initialIndex={initialIndex}
              >
                {children}
              </MemoryRouter>
            </LocalizationProvider>
          </I18nextProvider>
        </ThemeProvider>
      </Provider>
    );
  };
  const rtlRenderResult = rtlRender(ui, { ...renderOptions, wrapper: Wrapper });

  return {
    ...rtlRenderResult,
    store,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { render };
