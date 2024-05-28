import Button from "../components/form/Button";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
// Report Styling
import "../styles/report.css";

function DetailReportPage() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/reports/detail/update"); // Path ke halaman UpdateReport
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Contoh tanggal dan file
  const reportDate = new Date();
  const formattedDate = formatDate(reportDate);
  const uploadedFile = "foto_pesan_pelaku.pdf";

  return (
    <section className="bg-yellow-100 p-4 position-relative">
      <div className="row">
        <div className="col-md-auto mx-2 mb-4 mt-1">
          <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
        </div>
        <div className="card p-3">
          <div className="col-md-13">
            <div className="d-flex justify-content-end align-items-center mb-1 gap-3">
              <Button
                marginClass="btn btn-secondary d-flex align-items-center"
                onClick={handleEditClick}
              >
                <IconContext.Provider value={{ size: "25px" }}>
                  <div>
                    <MdEdit />
                  </div>
                </IconContext.Provider>
                <p className="m-0 ms-2">Update</p>
              </Button>
              <Button marginClass="btn btn-danger d-flex align-items-center">
                <IconContext.Provider value={{ size: "25px" }}>
                  <div>
                    <MdDeleteForever />
                  </div>
                </IconContext.Provider>
                <p className="m-0 ms-2">Delete</p>
              </Button>
            </div>
            <div className="card-body">
              <h5 className="mb-3">Judul Laporan - </h5> <p>{formattedDate}</p>
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
                        disabled
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
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="judul" className="">
                    Tempat Kejadian
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value="Gedung A, Universitas XYZ"
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="judul" className="">
                    Tanggal Kejadian
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="tanggalKejadian"
                    value="2023-05-20"
                    disabled
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="judul" className="">
                    Deskripsi Kejadian
                  </label>
                  <textarea
                    id="deskripsi"
                    className="form-control deskripsi"
                    disabled
                  >
                    Terjadi kekerasan seksual di Gedung A pada tanggal 20 Mei
                    2023. Pelaku adalah mahasiswa dari fakultas teknik.
                  </textarea>
                </div>
                <div className="col-12">
                  <p>Bukti</p>
                  <a
                    href={`/uploads/${uploadedFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {uploadedFile}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailReportPage;
