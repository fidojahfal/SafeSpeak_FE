import React from 'react';

function AboutMiddleItem({ children, title, body }) {
  return (
    <div className="card shadow" style={{ width: '330px', border: 'none' }}>
      <div className="text-center" style={{ paddingTop: '70px' }}>
        {children}
      </div>
      <div className="card-body d-flex flex-column">
        <h5
          className="card-title text-center pt-3 pb-2"
          style={{ color: 'black' }}
        >
          {title}
        </h5>
        <p className="card-text fs-5 fw-semibold mb-5 ps-4">{body}</p>
      </div>
    </div>
  );
}

export default AboutMiddleItem;
