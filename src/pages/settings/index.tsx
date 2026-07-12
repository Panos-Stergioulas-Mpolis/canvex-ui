import { Helmet } from "react-helmet-async";
import useLocales from "src/locales/use-locales";
import SettingsView from "src/features/settings";

const SettingsPage = () => {
  const { t } = useLocales();
  return (
    <>
      <Helmet>
        <title>{t("titles.settings", { ns: "meta" })}</title>
      </Helmet>

      <SettingsView />
    </>
  );
};

export default SettingsPage;
