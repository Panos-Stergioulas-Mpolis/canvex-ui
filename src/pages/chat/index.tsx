import { Helmet } from "react-helmet-async";
import useLocales from "src/locales/use-locales";
import ChatView from "src/features/chat";

const ChatPage = () => {
  const { t } = useLocales();
  return (
    <>
      <Helmet>
        <title>{t("titles.chat", { ns: "meta" })}</title>
      </Helmet>

      <ChatView />
    </>
  );
};

export default ChatPage;
