import IntroSection from "../components/home/IntroSection";
import SumLaporanSection from "../components/home/SumLaporanSection";
import ArticleSection from "../components/home/ArticleSection";

// Home Styling
import "../styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncReceiveArticles } from "../states/articles/action";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage({ role }) {
  const { articles = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(asyncReceiveArticles());
  }, [dispatch]);

  function onDetailArticleHandler(article_id) {
    navigate(`/articles/${article_id}/detail`, {
      state: { from: location },
      replace: true,
    });
  }

  if (!articles) {
    return null;
  }
  const sortedArticles = [...articles.originalArticles].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <>
      <IntroSection role={role} />
      <SumLaporanSection />
      <ArticleSection
        role={role}
        articles={sortedArticles}
        onDetail={onDetailArticleHandler}
        navigate={navigate}
      />
    </>
  );
}

export default HomePage;
