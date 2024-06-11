import React from "react";
import { SlMagnifier } from "react-icons/sl";
import Button from "../form/Button";

function ArticleHead({ role, onCreate }) {
  return (
    <div
      className="row d-flex flex-column-reverse flex-sm-column-reverse flex-xl-row flex-md-column-reverse "
      style={{ "--bs-gutter-x": "0" }}
    >
      <div className=" col-xl-8 ps-xl-5 py-5">
        <p
          className="fs-2 fw-bold text-center text-xl-start"
          style={{ color: "#0d6efd" }}
        >
          Cari Artikel
        </p>
        <p className="text-center text-xl-start">
          Jelajahi artikel seputar edukasi, proses penanganan, dan berita
          terbaru.
        </p>
        <div className="d-flex justify-content-center justify-content-xl-start">
          {role ? (
            <Button marginClass="mb-3 " onClickHandler={onCreate}>
              Buat Artikel Disini
            </Button>
          ) : null}
        </div>
        <div className="input-group input-group-sm mb-3 d-flex justify-content-center justify-content-xl-start">
          <span className="input-group-text " id="inputGroup-sizing-default">
            <SlMagnifier color="gray" />
          </span>
          <input
            type="text"
            className="form-control input-search-article"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <div className="col-xl-4 d-flex justify-content-end">
        {role ? (
          <img
            alt="Image illustration of dosen"
            src="/img/Beranda-Dosen-2-flip.png"
            width="50%"
            height="70%"
          />
        ) : (
          <img
            alt="Image illustration of siswa"
            src="/img/Beranda-Siswa-2-flip.png"
            width="50%"
            height="90%"
          />
        )}
      </div>
    </div>
  );
}

export default ArticleHead;
