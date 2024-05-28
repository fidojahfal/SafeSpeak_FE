import Button from "../form/Button";
import { MdOutlineFileUpload } from "react-icons/md";
import { IconContext } from "react-icons";

// Report Styling
import "../../styles/report.css";

function UpdateReport() {
  const uploadedFile = "foto_pesan_pelaku.pdf";
  return (
    <section className="bg-yellow-100 p-4 position-relative">
      <div className="row">
        <div className="col-md-auto mx-2 mb-4 mt-1">
          <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
        </div>
        <div className="card p-3">
          <div className="col-md-11">
            <div className="card-body">
              <h5 className="mb-3">Ubah Laporan</h5>
              <div className="row gy-3 gx-4">
                <div className="col-md-4">
                  <p className="mb-2">Jenis Kejadian</p>
                  <div className="d-flex">
                    <div className="form-check me-4">
                      <label htmlFor="kekerasanSeksual">
                        Kekerasan Seksual
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        id="kekerasanSeksual"
                        name="type"
                      />
                    </div>
                    <div className="form-check">
                      <label htmlFor="bullying" className="fst-italic">
                        Bullying
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        id="bullying"
                        name="type"
                        checked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <p className="mb-2">Kirim Secara Anonim*</p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Anonim
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="judul" className="">
                    Judul
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value="Lorem ipsum"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="judul" className="">
                    Tempat Kejadian
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value="Gedung A, Universitas XYZ"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="judul" className="">
                    Tanggal Kejadian
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value="2023-05-20"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="judul" className="">
                    Deskripsi Kejadian
                  </label>
                  <textarea id="deskripsi" className="form-control deskripsi">
                    Terjadi kekerasan seksual di Gedung A pada tanggal 20 Mei
                    2023. Pelaku adalah mahasiswa dari fakultas teknik.
                  </textarea>
                </div>
                <div className="col-12">
                  <p>Bukti</p>
                  <Button marginClass="d-flex align-items-center">
                    <IconContext.Provider value={{ size: "25px" }}>
                      <div>
                        <MdOutlineFileUpload />
                      </div>
                    </IconContext.Provider>
                    <p className="m-0 ms-2">Telusuri File</p>
                  </Button>
                  <a href="">{uploadedFile}</a>
                </div>
              </div>
              <p className="text-primary">
                *Dosen atau pihak penanganan kampus tetap akan mengontak kamu
                via email atau nomor telepon yang tersedia pada akun untuk
                penindaklanjutan.
              </p>
              <div className="d-flex justify-content-center">
                <Button>Update Laporan</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateReport;
