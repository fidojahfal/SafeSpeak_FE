import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../form/Alert";
import Modal from "../form/Modal";
import StatusReport from "../reports/StatusReport";
import StatusDropdown from "../reports/StatusDropdown";
import ReasonInput from "../reports/ReasonInput";
import PropTypes from "prop-types";

function GeneralCardDetailReport({
  children,
  sectionClassname = "bg-yellow-100 p-4",
  onDeleteHandler,
  isDosen,
  reportDetail,
  showReasonInput,
  onChangeStatusHandler,
  onShowReasonInputHandler,
}) {
  const navigate = useNavigate();
  return (
    <section className={sectionClassname}>
      <div className="row">
        <div className="col-lg-auto mx-2 mb-4 mt-1">
          <Link onClick={() => navigate(-1)}>
            <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
          </Link>
        </div>
        <div className="col-lg-11">
          <Alert />
          <div className="col-lg card p-3">
            <div className="card-body">{children}</div>
          </div>
          {isDosen && (
            <StatusDropdown
              status={reportDetail.status}
              id={reportDetail.id}
              onChangeStatus={onChangeStatusHandler}
              onShowReasonInput={onShowReasonInputHandler}
            />
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
          {showReasonInput && (
            <ReasonInput
              submitHandler={onChangeStatusHandler}
              reasonValue={reportDetail.reason || ""}
            />
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

GeneralCardDetailReport.propTypes = {
  children: PropTypes.node.isRequired,
  sectionClassname: PropTypes.string,
  onDeleteHandler: PropTypes.func.isRequired,
  isDosen: PropTypes.bool.isRequired,
  reportDetail: PropTypes.object.isRequired,
  showReasonInput: PropTypes.bool.isRequired,
  onChangeStatusHandler: PropTypes.func.isRequired,
  onShowReasonInputHandler: PropTypes.func.isRequired,
};

export default GeneralCardDetailReport;
