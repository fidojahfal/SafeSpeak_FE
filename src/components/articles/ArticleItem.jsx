import React from 'react';

function ArticleItem({ title, content, image }) {
  return (
    <div className="card" style={{ minHeight: '23rem', maxHeight: '23rem' }}>
      <img
        src={image}
        className="card-img-top"
        alt="Image of an article"
        width="100%"
      />
      <div className="card-body">
        <p
          className="card-subtitle text-body-secondary"
          style={{ fontSize: '12px' }}
        >
          Article
        </p>
        <h5 className="card-title" style={{ color: 'black' }}>
          {title}
        </h5>
        <p className="card-text">
          {content.length > 60 ? `${content.slice(0, 60)}...` : content}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ArticleItem;
