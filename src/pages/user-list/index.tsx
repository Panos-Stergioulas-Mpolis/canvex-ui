import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import UserListView from "src/features/user-list";

const UserListPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("titles.userList", { ns: "meta" })}</title>
      </Helmet>

      <UserListView />
    </>
  );
};

export default UserListPage;
