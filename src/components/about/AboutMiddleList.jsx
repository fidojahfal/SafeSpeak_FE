import React from 'react';
import AboutMiddleItem from './AboutMiddleItem';
import { FaRegEdit } from 'react-icons/fa';
import { TbBulb } from 'react-icons/tb';
import { MdOutlineSwipeDown } from 'react-icons/md';

function AboutMiddleList() {
  return (
    <div className="row" style={{ '--bs-gutter-x': '0' }}>
      <div className="col-xl-6 d-flex justify-content-start">
        <img
          className="about-article-image"
          src="/img/About-2.png"
          alt="Image about middle"
          width="50%"
          height="50%"
        />
      </div>
      <div className="col-xl-6" style={{ padding: '50px 50px' }}>
        <div className="d-flex flex-column">
          <div className="d-flex flex-column text-center text-sm-center text-xl-end align-self-center align-self-xl-end">
            <h1 className="fw-bold" style={{ color: '#0d6efd' }}>
              Layanan Kami
            </h1>
            <p className="fs-5">
              Berikut adalah beberapa fitur utama dari SafeSpeak.
            </p>
          </div>
          <div
            className="d-flex flex-column align-self-center align-self-xl-end flex-xl-row gap-5"
            style={{ margin: '100px 0px' }}
          >
            <AboutMiddleItem
              title="Buat Laporan"
              body="Siswa bisa melaporkan kasus mengenai kekerasan seksual/ bullying baik secara anonim maupun tidak dan melihat progres penindaklanjutannya."
            >
              <FaRegEdit color="#0d6efd" size={60} />
            </AboutMiddleItem>
            <AboutMiddleItem
              title="Menindaklanjuti Laporan"
              body="Dosen atau pihak penanganan kampus dapat menindaklanjuti laporan-laporan yang diterima."
            >
              <MdOutlineSwipeDown color="#0d6efd" size={60} />
            </AboutMiddleItem>
            <AboutMiddleItem
              title="Artikel"
              body="Siswa bisa mendapatkan informasi edukasi atau prosedur penanganan kampus via artikel yang dibuat oleh dosen."
            >
              <TbBulb color="#0d6efd" size={60} />
            </AboutMiddleItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMiddleList;
