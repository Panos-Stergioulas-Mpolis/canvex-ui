import { Helmet } from "react-helmet-async";
import useLocales from "src/locales/use-locales";
import UserListView from "src/features/user-list";

const UserListPage = () => {
  const { t } = useLocales();
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
