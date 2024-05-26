import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../components/form/Button";

// temporary, erase when moved to homepage
// Home Styling
import "../../styles/home.css";

function toCreateHandler() {
  navigate("/laporan/$(id)/create");
}

function Mahasiswa() {
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section>
      <div className="row" style={{ "--bs-gutter-x": "0" }}>
        <div className="col-xl-6 d-flex flex-column justify-content-center ps-5">
          <div>
            <h1 className="text-primary fw-bold mb-3">
              Memiliki masalah?
              <br />
              Jangan takut{" "}
              <u style={{ textDecorationColor: "#ffda6a" }}>bersuara.</u>
            </h1>
            <p className="fs-5 mb-3">
              Dosen dan pihak penanganan kekerasan seksual dan bullying <br />{" "}
              kampus siap mendengarkan dan menindaklanjuti laporanmu.
            </p>
            <Button
              type="submit"
              marginClass="fw-semibold"
              onClick={() => toCreateHandler(navigate, id)}
            >
              Buat Laporan
            </Button>
          </div>
        </div>
        <div className="col-xl-6 d-flex justify-content-end">
          <img
            src="../../public/img/Beranda-Siswa-1.png"
            className="img-fluid"
            alt="Beranda Siswa"
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center p-3 laporan-section text-center">
          <h4>Kamu tidak sendiri, laporan di SafeSpeak sudah mencapai</h4>
          <p>
            <span className="laporan-sum-text">53</span>
            <br />
            <span className="fs-4 fw-semibold">Laporan</span>
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center p-3 laporan-jumlah-section text-center">
          <p>
            <span className="laporan-sum-text">3</span>
            <br />
            <span className="fs-4 fw-semibold">Baru diterima</span>
          </p>
          <p>
            <span className="laporan-sum-text">20</span>
            <br />
            <span className="fs-4 fw-semibold">Sedang Ditindaklanjuti</span>
          </p>
          <p>
            <span className="laporan-sum-text">30</span>
            <br />
            <span className="fs-4 fw-semibold">Selesai Ditindak</span>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Mahasiswa;
