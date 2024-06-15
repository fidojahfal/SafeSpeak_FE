import React from "react";
import PropTypes from "prop-types";
import Button from "../form/Button";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { IconContext } from "react-icons";
import ProfileDetailReport from "../shared/ProfileDetailReport";
import { getFileNameFromUrl } from "../../utils/helper";

const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

function DetailReport({
  title,
  type,
  place_report,
  date_report,
  description,
  evidence,
  is_anonim,
  user_id,
  isDosen,
  handleEditClick,
  status,
}) {
  const formattedDate = formatDate(date_report);
  const fileName = getFileNameFromUrl(evidence);
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
        <h5 className="mb-2 mb-md-0 me-2">
          {title} - <span>{formattedDate}</span>
        </h5>
        <div className="d-flex flex-column flex-md-row align-items-center gap-2">
          {isDosen && (
            <p
              className={`badge rounded-pill fs-6 ${
                status === 0
                  ? "bg-warning text-brown"
                  : status === 1
                  ? "bg-primary text-white"
                  : status === 2
                  ? "text-bg-success"
                  : "text-bg-danger"
              }`}
            >
              {status === 0
                ? "Diterima"
                : status === 1
                ? "Ditindaklanjuti"
                : status === 2
                ? "Selesai"
                : "Ditolak"}
            </p>
          )}
          {!isDosen && (
            <div className="d-flex gap-2">
              <div className="d-flex">
                <Button
                  marginClass="btn btn-secondary d-flex align-items-center"
                  onClickHandler={handleEditClick}
                  disabled={status !== 0}
                >
                  <IconContext.Provider value={{ size: "25px" }}>
                    <div>
                      <MdEdit />
                    </div>
                  </IconContext.Provider>
                  <p className="m-0 ms-2">Update</p>
                </Button>
              </div>
              <div className="d-flex">
                <Button
                  marginClass="btn btn-danger d-flex align-items-center"
                  target="#deleteModal"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  disabled={status !== 0}
                >
                  <IconContext.Provider value={{ size: "25px" }}>
                    <div>
                      <MdDeleteForever />
                    </div>
                  </IconContext.Provider>
                  <p className="m-0 ms-2">Delete</p>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ProfileDetailReport
        title={title}
        type={type}
        place_report={place_report}
        date_report={date_report}
        description={description}
        evidence={evidence}
        is_anonim={is_anonim}
        user_id={user_id}
        fileName={fileName}
        formattedDate={formattedDate}
      />
    </>
  );
}

DetailReport.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  place_report: PropTypes.string.isRequired,
  date_report: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  evidence: PropTypes.string.isRequired,
  is_anonim: PropTypes.bool.isRequired,
  user_id: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nim: PropTypes.number.isRequired,
  }),
  isDosen: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
};

DetailReport.defaultProps = {
  user_id: null,
};

export default DetailReport;
