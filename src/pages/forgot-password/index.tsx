import { Helmet } from "react-helmet-async";
import useLocales from "src/locales/use-locales";
import ForgotPasswordView from "src/features/forgot-password";

const ForgotPasswordPage = () => {
  const { t } = useLocales();
  return (
    <>
      <Helmet>
        <title>{t("titles.forgotPassword", { ns: "meta" })}</title>
      </Helmet>

      <ForgotPasswordView />
    </>
  );
};

export default ForgotPasswordPage;
