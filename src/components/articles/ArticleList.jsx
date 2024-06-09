import React from 'react';
import ArticleItem from './ArticleItem';
import ArticleMiniCard from '../home/ArticleMiniCard';

function ArticleList({ articles = [], onDetail }) {
  return (
    <div className={`${articles.length !== 0 && 'article-list'}`}>
      {articles.length !== 0 ? (
        articles.map((article) => (
          <div key={article._id}>
            <ArticleMiniCard height="12rem" onDetail={onDetail} {...article} />
          </div>
        ))
      ) : (
        <div className="d-flex justify-content-center">
          <p className="fs-4 fw-bold">No articles.</p>
        </div>
      )}
      {}
    </div>
  );
}

export default ArticleList;
