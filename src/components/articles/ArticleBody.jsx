import React from 'react';
import ArticleList from './ArticleList';

function ArticleBody({ articles, onDetail }) {
  return (
    <div className="article-body mb-5" style={{ '--bs-gutter-x': '0' }}>
      <ArticleList articles={articles} onDetail={onDetail} />
    </div>
  );
}

export default ArticleBody;
