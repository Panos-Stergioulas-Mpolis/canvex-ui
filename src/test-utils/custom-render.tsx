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
          <MemoryRouter
            initialEntries={initialEntries}
            initialIndex={initialIndex}
          >
            {children}
          </MemoryRouter>
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
