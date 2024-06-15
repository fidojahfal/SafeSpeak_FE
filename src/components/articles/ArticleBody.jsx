import React from 'react';
import ArticleList from './ArticleList';
import Alert from '../form/Alert';
import PropTypes from 'prop-types';

function ArticleBody({ articles, onDetail }) {
  return (
    <div className="article-body mb-5" style={{ '--bs-gutter-x': '0' }}>
      <div className="mx-5 mb-5">
        <Alert />
      </div>
      <ArticleList articles={articles} onDetail={onDetail} />
    </div>
  );
}

ArticleBody.propTypes = {
  articles: PropTypes.array.isRequired,
  onDetail: PropTypes.func.isRequired,
};

export default ArticleBody;
