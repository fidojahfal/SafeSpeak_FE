import React from 'react';
import AboutBottomItem from './AboutBottomItem';

function AboutBottomList() {
  return (
    <div className="row mb-5" style={{ '--bs-gutter-x': '0' }}>
      <div className="col-xl-12 ">
        <div
          className="d-flex flex-column"
          style={{ backgroundImage: '/public/img/About-3.png' }}
        >
          <div className="img-about-bottom">
            <img src="/img/About-3.png" alt="About bottom image" width="40%" />
          </div>
          <h1
            className="text-center fw-bold"
            style={{ color: '#0d6efd', zIndex: 1 }}
          >
            Tim SafeSpeak
          </h1>
          <div className="d-flex flex-xl-row flex-sm-column gap-5 mt-5 justify-content-center align-items-center">
            <AboutBottomItem name="Giovillando" jobdesk="Frontend Developer" />
            <AboutBottomItem
              name="Fido Jahfal Prayoga"
              jobdesk="Frontend & Backend Developer"
            />
            <AboutBottomItem
              name="Shabrina Nurmalitasari"
              jobdesk="Frontend Developer & UI/UX Designer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBottomList;
