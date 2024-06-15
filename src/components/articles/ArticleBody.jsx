import React from "react";
import ArticleList from "./ArticleList";
import Alert from "../form/Alert";

function ArticleBody({ articles, onDetail }) {
  return (
    <div className="article-body mb-5" style={{ "--bs-gutter-x": "0" }}>
      <div className="mx-5 mb-5">
        <Alert />
      </div>
      <ArticleList articles={articles} onDetail={onDetail} />
    </div>
  );
}

export default ArticleBody;
