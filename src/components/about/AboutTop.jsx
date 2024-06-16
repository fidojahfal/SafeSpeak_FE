import React from "react";

function AboutTop() {
  return (
    <div className="row" style={{ "--bs-gutter-x": "0" }}>
      <div className="col-xl-6 d-flex flex-column justify-content-center text-break about-top-text">
        <h1 className="mb-0">
          <b style={{ color: "#0d6efd" }}>Halo,</b>
        </h1>
        <h1 className="mb-4">
          <b style={{ color: "#0d6efd" }}>
            Kami adalah{" "}
            <u style={{ textDecorationColor: "#ffda6a" }}> SafeSpeak.</u>
          </b>
        </h1>

        <p className="fs-5 mb-4">
          Tahukah kamu? Terdapat 63% kasus kekerasan seksual di kampus yang
          tidak dilaporkan [1]. Di sisi lain, 36,31% siswa berpotensi mengalami
          bullying dan hanya sekitar 13,54% siswa yang berani melapor [2].
        </p>
        <p className="fs-5 mb-0">
          Siswa enggan melapor karena: malu, laporan tidak ditindaklanjuti, dan
          kurangnya edukasi.
        </p>
        <p className="fs-5 text-primary fw-bold">
          SafeSpeak hadir sebagai portal laporan dan informasi untuk memudahkan
          siswa.
        </p>
        <p>
          [1]{" "}
          <a
            style={{ textDecoration: "none", color: "#6C757D" }}
            href="https://lm.psikologi.ugm.ac.id/2022/05/kekerasan-seksual-di-kampus/"
          >
            https://lm.psikologi.ugm.ac.id/2022/05/kekerasan-seksual-di-kampus/
          </a>
        </p>
        <p>
          [2]{" "}
          <a
            style={{ textDecoration: "none", color: "#6C757D" }}
            href="https://www.ums.ac.id/berita/perspektif/jeratan-gelap-bullying-di-dunia-pendidikan-indonesia"
          >
            https://www.ums.ac.id/berita/perspektif/jeratan-gelap-bullying-di-dunia-pendidikan-indonesia
          </a>
        </p>
      </div>
      <div className="col-xl-6 d-flex justify-content-end">
        <img src="/img/About-1.png" width="100%" alt="about top image" />
      </div>
    </div>
  );
}

export default AboutTop;
