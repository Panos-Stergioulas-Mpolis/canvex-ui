import { Helmet } from "react-helmet-async";
import useLocales from "src/locales/use-locales";
import BoardView from "src/features/board";

const BoardPage = () => {
  const { t } = useLocales();
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
