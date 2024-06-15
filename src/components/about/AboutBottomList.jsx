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
          <div className="d-flex flex-xl-row flex-column gap-5 mt-5 justify-content-center align-items-center">
            <AboutBottomItem
              name="Giovillando"
              jobdesk="Frontend Developer"
              src="IMG-20231204-WA0000.jpg"
              linkedin={{
                link: 'https://www.linkedin.com/in/gio-villando-357b0b2a4',
                name: 'Gio Villando',
              }}
              github={{
                link: 'https://github.com/Giovillando',
                name: 'Giovillando',
              }}
            />
            <AboutBottomItem
              name="Fido Jahfal Prayoga"
              jobdesk="Frontend & Backend Developer"
              src="Fido Jahfal.png"
              linkedin={{
                link: 'https://www.linkedin.com/in/fidojahfal/',
                name: 'Fido Jahfal Prayoga',
              }}
              github={{
                link: 'https://github.com/fidojahfal',
                name: 'fidojahfal',
              }}
            />
            <AboutBottomItem
              name="Shabrina Nurmalitasari"
              jobdesk="Frontend Developer & UI/UX"
              src="Shabrina_Formal.png"
              linkedin={{
                link: 'https://www.linkedin.com/in/shabrina-nurmalitasari',
                name: 'Shabrina Nurmalitasari',
              }}
              github={{
                link: 'https://github.com/shaabrinaasha',
                name: 'shaabrinaasha',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBottomList;
