import React, { useEffect } from "react";
import ArticleHead from "../components/articles/ArticleHead";
import ArticleBody from "../components/articles/ArticleBody";
import "../styles/article.css";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncFilterArticles,
  asyncReceiveArticles,
} from "../states/articles/action";
import { useLocation, useNavigate } from "react-router-dom";

function ArticlePage() {
  const { articles = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    dispatch(asyncReceiveArticles());
  }, [dispatch]);

  function onDetailArticleHandler(id) {
    navigate(`/articles/${id}/detail`, {
      state: { from: location },
      replace: true,
    });
  }

  function onCreateHandler() {
    navigate("/articles/create");
  }

  function onFilterArticlesHandler(keyword) {
    dispatch(asyncFilterArticles(keyword));
  }

  if (!articles) {
    return null;
  }

  return (
    <section className="bg-articles" style={{ "--bs-gutter-x": "0" }}>
      <ArticleHead
        role={authUser ? authUser.role : 0}
        onCreate={onCreateHandler}
        onFilter={onFilterArticlesHandler}
      />
      <ArticleBody
        articles={articles.filteredArticles}
        onDetail={onDetailArticleHandler}
      />
    </section>
  );
}

export default ArticlePage;
