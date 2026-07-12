import { Helmet } from "react-helmet-async";
import useLocales from "src/locales/use-locales";
import SignInUp from "src/features/sign-up";

const SignUpPage = () => {
  const { t } = useLocales();
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
