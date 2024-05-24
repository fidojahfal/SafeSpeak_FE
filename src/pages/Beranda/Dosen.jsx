import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../components/form/Button";

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
    <section className="Mahasiswa-page container-fluid">
      <div className="row align-items-center gx-0">
        <div className="col-md-6 col-12 text-md-start text-center mb-4 mb-md-0">
          <div>
            <h1>Dengarkan suara siswa,</h1>
            <h1>selamatkan mereka.</h1>
            <p>
              Baca dan tindak lanjuti laporan mengenai kekerasan seksual atau{" "}
            </p>
            <p>bullying yang dialami siswa seputar kampus.</p>
            <Button
              type="submit"
              marginClass="mt-3 btn-sm"
              onClick={() => toCreateHandler(navigate, id)}
            >
              Lihat Laporan
            </Button>
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-md-end">
          <div className="image-container">
            <header className="beranda-page__hero">
              <h1>
                <img
                  src="../../public/img/Beranda-Dosen-1.png"
                  className="img-fluid"
                  alt="Beranda Siswa"
                />
              </h1>
            </header>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center laporan-section">
          <div className="row">
            <div className="laporan text-center">
              <p>Dengarkan siswa, laporan di SafeSpeak sudah mencapai</p>
              <h1>53</h1>
              <p>Laporan</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center laporan-jumlah-section">
            <div className="col-md-4 col-12 text-md-start text-center mb-4 mb-md-0">
              <h1>3</h1>
              <p>Baru Diterima</p>
            </div>
            <div className="col-md-4 col-12 text-md-start text-center mb-4 mb-md-0">
              <h1>20</h1>
              <p>Sedang Ditindaklanjuti</p>
            </div>
            <div className="col-md-4 col-12 text-md-start text-center mb-4 mb-md-0">
              <h1>30</h1>
              <p>Selesai Ditindak</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mahasiswa;
