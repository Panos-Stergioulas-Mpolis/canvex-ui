import { RouterProvider } from "react-router-dom";
import ThemeProvider from "src/theme/theme-provider";
import router from "src/routes/sections";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import i18n from "src/locales/i18n";
import { Provider as ReduxProvider } from "react-redux";
import { setupStore } from "./store/store";
import { Suspense } from "react";
import LoadingScreen from "./components/loading-screen";

const App = () => {
  return (
    <ReduxProvider store={setupStore()}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <HelmetProvider>
            <Suspense fallback={<LoadingScreen />}>
              <RouterProvider router={router} />
            </Suspense>
          </HelmetProvider>
        </I18nextProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
