import React, { useEffect } from 'react';
import ArticleHead from '../components/articles/ArticleHead';
import ArticleBody from '../components/articles/ArticleBody';
import '../styles/article.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncFilterArticles,
  asyncReceiveArticles,
} from '../states/articles/action';
import { useNavigate } from 'react-router-dom';

function ArticlePage() {
  const { articles = [], authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncReceiveArticles());
  }, [dispatch]);

  function onDetailArticleHandler(id) {
    navigate(`/articles/${id}/detail`);
  }

  function onCreateHandler() {
    navigate('/articles/create');
  }

  function onFilterArticlesHandler(keyword) {
    dispatch(asyncFilterArticles(keyword));
  }

  return (
    <section className="bg-articles" style={{ '--bs-gutter-x': '0' }}>
      <ArticleHead
        role={authUser ? authUser.role : 0}
        onCreate={onCreateHandler}
        onFilter={onFilterArticlesHandler}
      />
      <ArticleBody articles={articles} onDetail={onDetailArticleHandler} />
    </section>
  );
}

export default ArticlePage;
