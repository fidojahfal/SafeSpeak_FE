import React from 'react';
import ArticleMiniCard from '../home/ArticleMiniCard';
import PropTypes from 'prop-types';

function ArticleList({ articles, onDetail }) {
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

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  onDetail: PropTypes.func.isRequired,
};

export default ArticleList;
