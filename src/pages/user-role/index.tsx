import { Helmet } from "react-helmet-async";
import useLocales from "src/locales/use-locales";
import UserRoleView from "src/features/user-role";

const UserRolePage = () => {
  const { t } = useLocales();
  return (
    <>
      <Helmet>
        <title>{t("titles.userRole", { ns: "meta" })}</title>
      </Helmet>

      <UserRoleView />
    </>
  );
};

export default UserRolePage;
