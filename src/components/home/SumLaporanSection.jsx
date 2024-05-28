function SumLaporanSection() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center p-3 laporan-section text-center">
        <h4>Kamu tidak sendiri, laporan di SafeSpeak sudah mencapai</h4>
        <p>
          <span className="laporan-sum-text">53</span>
          <br />
          <span className="fs-4 fw-semibold">Laporan</span>
        </p>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 laporan-jumlah-section text-center">
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
    </>
  );
}

export default SumLaporanSection;
