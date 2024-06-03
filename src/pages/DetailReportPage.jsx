import React, { useEffect } from "react";
import Button from "../components/form/Button";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveReportDetail } from "../states/reportDetail/action";
import DetailReport from "../components/reports/DetailReport";
import StatusReport from "../components/reports/StatusReport";
import Modal from "../components/form/Modal";
import "../styles/report.css";

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
        <div className="card p-3">
          <div className="col-md-13">
            <div className="d-flex justify-content-end align-items-center mb-1 gap-3">
              {isDosen && (
                <p
                  className={`badge rounded-pill fs-6 ${
                    reportDetail.status === 0
                      ? "bg-warning text-dark"
                      : reportDetail.status === 1
                      ? "text-bg-primary"
                      : reportDetail.status === 2
                      ? "text-bg-success"
                      : "text-bg-danger"
                  }`}
                >
                  {reportDetail.status === 0
                    ? "Diterima"
                    : reportDetail.status === 1
                    ? "Ditindaklanjuti"
                    : reportDetail.status === 2
                    ? "Selesai"
                    : "Ditolak"}
                </p>
              )}
              {!isDosen && (
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
              )}
              {!isDosen && (
                <Button
                  marginClass="btn btn-danger d-flex align-items-center"
                  target="#deleteModal"
                >
                  <IconContext.Provider value={{ size: "25px" }}>
                    <div>
                      <MdDeleteForever />
                    </div>
                  </IconContext.Provider>
                  <p className="m-0 ms-2">Delete</p>
                </Button>
              )}
            </div>
            <div className="card-body">
              <DetailReport {...reportDetail} authUser={authUser.id} />
            </div>
          </div>
        </div>
        {isDosen && (
          <div className="dropdown d-flex justify-content-center mt-4">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ubah Status
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        )}
        {!isDosen && (
          <div className="card p-3 mt-4">
            <div className="col-md-13">
              <div className="d-flex justify-content-end align-items-center mb-1 gap-3">
                <div className="card-body">
                  <StatusReport
                    status={reportDetail.status}
                    alasanDitolak={reportDetail.alasanDitolak}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal id="deleteModal" />
    </section>
  );
}

export default DetailReportPage;
