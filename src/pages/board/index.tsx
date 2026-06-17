import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import BoardView from "src/features/board";

const BoardPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("titles.board", { ns: "meta" })}</title>
      </Helmet>

      <BoardView />
    </>
  );
};

export default BoardPage;
