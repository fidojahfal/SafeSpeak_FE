import React, { useEffect } from 'react';
import ArticleHead from '../components/articles/ArticleHead';
import ArticleBody from '../components/articles/ArticleBody';
import '../styles/article.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveArticles } from '../states/articles/action';
import { useNavigate } from 'react-router-dom';

function ArticlePage() {
  const { articles, authUser } = useSelector((states) => states);
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

  return (
    <section className="bg-articles" style={{ '--bs-gutter-x': '0' }}>
      <ArticleHead role={authUser.role} onCreate={onCreateHandler} />
      <ArticleBody articles={articles} onDetail={onDetailArticleHandler} />
    </section>
  );
}

export default ArticlePage;
