import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function AboutBottomItem({ name, github, linkedin, src, jobdesk }) {
  return (
    <div
      className="card text-center card-about-bottom"
      style={{
        minHeight: '30rem',
        border: 'solid 20px #cfe2ff',
        borderRadius: '20px',
        borderWidth: '20px',
      }}
    >
      <img
        className="rounded-circle card-img-top align-self-center mt-5 mb-3"
        src={`/img/${src}`}
        style={{ width: '100px' }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'black' }}>
          {name}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted mb-5">{jobdesk}</h6>
        <div className="d-flex flex-column gap-3 align-items-center">
          <div className="d-flex flex-row gap-2">
            <FaGithub size={30} color="#0d6efd" />{' '}
            <a href={`${github.link}`} target="_blank">
              github/{github.name}
            </a>
          </div>
          <div className="d-flex flex-row gap-2">
            <FaLinkedin size={30} color="#0d6efd" />{' '}
            <a href={linkedin.link} target="_blank">
              linkedin/{linkedin.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBottomItem;
