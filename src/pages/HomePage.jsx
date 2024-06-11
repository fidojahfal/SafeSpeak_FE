import IntroSection from "../components/home/IntroSection";
import SumLaporanSection from "../components/home/SumLaporanSection";
import ArticleSection from "../components/home/ArticleSection";

// Home Styling
import "../styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncReceiveArticles } from "../states/articles/action";
import { useNavigate } from "react-router-dom";

function HomePage({ role }) {
  const { articles } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncReceiveArticles());
  }, [dispatch]);

  function onDetailArticleHandler(article_id) {
    navigate(`/articles/${article_id}/detail`);
  }

  return (
    <>
      <IntroSection role={role} />
      <SumLaporanSection />
      <ArticleSection
        role={role}
        articles={articles}
        onDetail={onDetailArticleHandler}
        navigate={navigate}
      />
    </>
  );
}

export default HomePage;
