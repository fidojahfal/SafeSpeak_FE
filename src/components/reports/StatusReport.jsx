import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import PropTypes from "prop-types";
import "../../styles/status.css";

const StatusReport = ({ status, alasanDitolak }) => {
  return (
    <div className="stepper">
      <div className="steps-container">
        <div className="steps">
          <div className=
          {`step ${status >= 1 ? "active" : ""}`} id="1">
            <div className="step-title">
              <span className="step-number">01</span>
              <div className="step-text">Diterima</div>
            </div>
            <div className={`icon ${status >= 1 ? "active" : ""}`}>
              <FaCheckCircle size={30} />
            </div>
          </div>
          <div className={`step ${status >= 2 ? "active" : ""}`} id="2">
            <div className="step-title">
              <span className="step-number">02</span>
              <div className="step-text">Ditindaklanjuti</div>
            </div>
            <div className={`icon ${status >= 2 ? "active" : ""}`}>
              <BsPersonWorkspace size={30} />
            </div>
          </div>
          <div
            className={`step ${
              status === 3 ? "completed" : status === 4 ? "rejected" : ""
            }`}
            id="3"
          >
            <div className="step-title">
              <span className="step-number">03</span>
              <div className="step-text">
                {status === 3
                  ? "Selesai"
                  : status === 4
                  ? "Ditolak"
                  : "Selesai/Ditolak"}
              </div>
            </div>
            <div
              className={`icon ${
                status === 3 ? "completed" : status === 4 ? "rejected" : ""
              }`}
            >
              {status === 3 ? (
                <BiLike size={30} />
              ) : status === 4 ? (
                <BiDislike size={30} />
              ) : (
                <BiLike size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="stepper-content-container">
        <div className="stepper-content fade-in" stepper-label="1">
          {status >= 1 && (
            <div className="info">Laporan kamu sudah masuk ke dalam sistem</div>
          )}
        </div>
        <div className="stepper-content fade-in" stepper-label="2">
          {status < 2 ? (
            <div className="info">
              Dosen akan mereview laporan dan mengontak anda via email/nomor
              telepon untuk penindaklanjutan
            </div>
          ) : status === 2 ? (
            <>
              <div className="info">Dosen sudah memproses laporan</div>
              {status < 3 && status < 4 && (
                <div className="info">
                  Hubungi safespeak@gmail jika belum dikontak untuk
                  penindaklanjutan
                </div>
              )}
            </>
          ) : null}
        </div>
        <div className="stepper-content fade-in" stepper-label="3">
          {status < 3 && status < 4 ? (
            <div className="info">
              akan menandakan laporan selesai ditindaklanjuti atau ditolak
              dengan alasan
            </div>
          ) : status === 3 ? (
            <div className="info">
              Laporan ditandakan selesai
              <br />
              Jika anda merasa ini adalah kesalahan, silahkan kontak
              safespeak@gmail
            </div>
          ) : status === 4 ? (
            <div className="info">
              Lihat alasan penolakan dibawah
              <br />
              Jika anda merasa ini adalah kesalahan, silahkan kontak
              safespeak@gmail
            </div>
          ) : null}
        </div>
      </div>
      {status === 4 && (
        <div className="alert alert-danger mt-3">
          <strong>Alasan Ditolak:</strong> {alasanDitolak}
        </div>
      )}
    </div>
  );
};

StatusReport.propTypes = {
  status: PropTypes.number.isRequired,
  alasanDitolak: PropTypes.string,
};

export default StatusReport;
