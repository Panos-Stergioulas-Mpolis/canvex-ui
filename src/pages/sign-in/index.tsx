import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import SignInView from "src/features/sign-in";

const SignInPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("titles.signIn", { ns: "meta" })}</title>
      </Helmet>

      <SignInView />
    </>
  );
};

export default SignInPage;
