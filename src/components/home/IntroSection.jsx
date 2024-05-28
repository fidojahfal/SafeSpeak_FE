import Button from "../form/Button";

function IntroSection({ role }) {
  return (
    <section>
      <div className="row" style={{ "--bs-gutter-x": "0" }}>
        <div className="col-xl-6 d-flex flex-column justify-content-center title-right-padding">
          <div className="p-4 pt-lg-0 ps-lg-5">
            <h1 className="text-primary fw-bold mb-3">
              {role ? "Dengarkan suara siswa," : "Memiliki masalah?"}
              <br />
              {role ? "" : "Jangan takut "}
              <u style={{ textDecorationColor: "#ffda6a" }}>
                {role ? "selamatkan mereka." : "bersuara."}
              </u>
            </h1>
            <p className="fs-5 mb-3">
              {role
                ? "Baca dan tindak lanjuti laporan mengenai kekerasan seksual atau bullying yang dialami siswa seputar kampus."
                : "Dosen dan pihak penanganan kekerasan seksual dan bullying kampus siap mendengarkan dan menindaklanjuti laporanmu."}
            </p>
            <Button type="submit" marginClass="fw-semibold">
              {role ? "Lihat Laporan" : "Buat Laporan"}
            </Button>
          </div>
        </div>
        <div className="col-xl-6 d-flex justify-content-end">
          <img
            src={role ? "img/Beranda-Dosen-1.png" : "img/Beranda-Siswa-1.png"}
            className="img-fluid"
            alt="Beranda Siswa"
          />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
