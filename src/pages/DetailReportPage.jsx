import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveReportDetail } from "../states/reportDetail/action";
import DetailReport from "../components/reports/DetailReport";
import StatusReport from "../components/reports/StatusReport";
import Modal from "../components/form/Modal";
import AlasanDitolak from "../components/reports/AlasanDitolak";
import "../styles/report.css";
import Alert from "../components/form/Alert";
import { asyncDeleteReport } from "../states/reports/action";
import StatusDropdown from "../components/reports/StatusDropdown";

function DetailReportPage() {
  const navigate = useNavigate();
  const { id: reportId } = useParams();
  const { reportDetail, authUser } = useSelector((states) => ({
    reportDetail: states.reportDetail,
    authUser: states.authUser,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (reportId) {
      console.log(`Fetching report details for ID: ${reportId}`);
      dispatch(asyncReceiveReportDetail(reportId));
    }
  }, [reportId, dispatch]);

  const handleEditClick = () => {
    navigate(`/reports/${reportId}/update`); // Path ke halaman UpdateReport dengan ID laporan
    console.log(`Navigating to update page for report ID: ${reportId}`);
  };

  const onDeleteHandler = () => {
    dispatch(asyncDeleteReport(reportId));
    navigate("/reports");
  };

  const isDosen = authUser.role === 1;

  if (!reportDetail) {
    return null;
  }

  return (
    <section className="bg-yellow-100 p-4">
      <div className="row">
        <div className="col-lg-auto mx-2 mb-4 mt-1">
          <Link onClick={() => navigate(-1)}>
            <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
          </Link>
        </div>
        <div className="col-lg-11">
          <Alert />
          <div className="col-lg card p-3">
            <div className="card-body">
              <DetailReport
                {...reportDetail}
                authUser={authUser.id}
                isDosen={isDosen}
                handleEditClick={handleEditClick}
              />
            </div>
          </div>
          {isDosen && (
            <StatusDropdown status={reportDetail.status} id={reportId} />
          )}
          {!isDosen && (
            <div className="card p-3 mt-4">
              <div className="col-md-13">
                <div className="d-flex justify-content-end align-items-center mb-1 gap-3">
                  <div className="card-body">
                    <StatusReport status={reportDetail.status} />
                  </div>
                </div>
              </div>
            </div>
          )}
          {!isDosen && reportDetail.status === 3 && (
            <div className="card p-3 mt-4">
              <div className="col-md-13">
                <div className="d-flex justify-content-end align-items-center mb-1 gap-3">
                  <div className="card-body">
                    <AlasanDitolak
                      status={reportDetail.status}
                      alasanDitolak={reportDetail.alasanDitolak}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal
        id="deleteModal"
        body="Apakah anda yakin ingin menghapus laporan ini? Anda tidak dapat memulihkan laporan."
        title="Konfirmasi Hapus Laporan"
        cancel="Batal"
        confirm="Hapus"
        onConfirm={onDeleteHandler}
        variant="btn-danger"
      />
    </section>
  );
}

export default DetailReportPage;
