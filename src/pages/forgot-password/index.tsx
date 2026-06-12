import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import ForgotPasswordView from "src/features/forgot-password";

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
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
