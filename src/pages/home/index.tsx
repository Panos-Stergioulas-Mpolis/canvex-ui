import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Home from "src/features/home";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("titles.home", { ns: "meta" })}</title>
      </Helmet>

      <Home />
    </>
  );
};

export default HomePage;
