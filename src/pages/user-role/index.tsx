import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import UserRoleView from "src/features/user-role";

const UserRolePage = () => {
  const { t } = useTranslation();
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
