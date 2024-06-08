import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveReportCount } from "../../states/countReport/action";

function SumLaporanSection() {
  const dispatch = useDispatch();
  const { total, status_0, status_1, status_2 } = useSelector(
    (state) => state.countReport
  );

  useEffect(() => {
    dispatch(asyncReceiveReportCount());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center p-3 laporan-section text-center">
        <h4>Kamu tidak sendiri, laporan di SafeSpeak sudah mencapai</h4>
        <div className="d-flex flex-column align-items-center">
          <p className="laporan-sum-text m-0">{total}</p>
          <p className="fs-4 fw-semibold m-0">Laporan</p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 laporan-jumlah-section text-center gap-5">
        <div className="d-flex flex-column align-items-center">
          <p className="laporan-sum-text m-0">{status_0}</p>
          <p className="fs-4 fw-semibold m-0">Baru diterima</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p className="laporan-sum-text m-0">{status_1}</p>
          <p className="fs-4 fw-semibold m-0">Sedang Ditindaklanjuti</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p className="laporan-sum-text m-0">{status_2}</p>
          <p className="fs-4 fw-semibold m-0">Selesai Ditindak</p>
        </div>
      </div>
    </>
  );
}

export default SumLaporanSection;
