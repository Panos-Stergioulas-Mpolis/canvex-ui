import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import SignInUp from "src/features/sign-up";

const SignUpPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("meta.title.signUp", { ns: "meta" })}</title>
      </Helmet>

      <SignInUp />
    </>
  );
};

export default SignUpPage;
