import { Helmet } from "react-helmet-async";
import NotFoundView from "src/features/404";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>

      <NotFoundView />
    </>
  );
};

export default NotFoundPage;
