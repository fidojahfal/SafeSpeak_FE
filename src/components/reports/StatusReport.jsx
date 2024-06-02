import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import PropTypes from "prop-types";
import "../../styles/status.css";

const StatusReport = ({ status, alasanDitolak }) => {
  const renderStatusIcon = (currentStatus) => {
    switch (currentStatus) {
      case 0:
        return <FaCheckCircle size={30} />;
      case 1:
        return <BsPersonWorkspace size={30} />;
      case 2:
      case 3:
        return currentStatus === 2 ? (
          <BiLike size={30} />
        ) : (
          <BiDislike size={30} />
        );
      default:
        return null;
    }
  };

  const renderStatusText = (currentStatus) => {
    switch (currentStatus) {
      case 0:
        return "Diterima";
      case 1:
        return "Ditindaklanjuti";
      case 2:
      case 3:
        return currentStatus === 2 ? "Selesai" : "Ditolak";
      default:
        return "Selesai";
    }
  };

  const renderStatusInfo = (currentStatus) => {
    switch (currentStatus) {
      case 0:
        return "Laporan kamu sudah masuk ke dalam sistem.";
      case 1:
        return "Dosen akan mereview laporan dan mengontak anda via email/nomor telepon untuk penindaklanjutan.";
      case 2:
      case 3:
        return currentStatus === 2
          ? "Laporan ditandakan selesai. Jika anda merasa ini adalah kesalahan, silahkan kontak safespeak@gmail."
          : `Lihat alasan penolakan dibawah. Jika anda merasa ini adalah kesalahan, silahkan kontak safespeak@gmail. Alasan Ditolak: ${alasanDitolak}`;
      default:
        return "";
    }
  };

  return (
    <div className="stepper">
      <div className="steps-container">
        <div className="steps">
          {[0, 1, 2].map((step) => (
            <React.Fragment key={step}>
              <div
                className={`step me-2 ms-2 ${status >= step ? "active" : ""}`}
                id={step}
              >
                <div className={`icon ${status >= step ? "active" : ""}`}>
                  {renderStatusIcon(step)}
                </div>
                <div className="step-title">
                  <div className="step-text">{renderStatusText(step)}</div>
                </div>
              </div>
              {step < 2 && (
                <div
                  className={`step-bar ${status >= step + 1 ? "active" : ""}`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="stepper-content-container">
        <div className="stepper-content fade-in">
          {renderStatusInfo(status)}
        </div>
      </div>
    </div>
  );
};

StatusReport.propTypes = {
  status: PropTypes.number.isRequired,
  alasanDitolak: PropTypes.string,
};

export default StatusReport;
