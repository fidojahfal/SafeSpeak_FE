import React from "react";
import PropTypes from "prop-types";

function ProfileDetailReport({
  type,
  place_report,
  formattedDate,
  description,
  evidence,
  is_anonim,
  user_id = null,
  fileName,
}) {
  return (
    <div className="row gy-3 gx-4">
      <div className="col-md-4">
        <p className="mb-2 fw-bold text-primary">Jenis Kejadian</p>
        <div className="d-flex">
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="radio"
              id="kekerasanSeksual"
              name="type"
              checked={type === 0}
              disabled
            />
            <label htmlFor="kekerasanSeksual">Kekerasan Seksual</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="bullying"
              name="type"
              checked={type === 1}
              disabled
            />
            <label htmlFor="bullying" className="fst-italic">
              Bullying
            </label>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <p className="mb-2 fw-bold text-primary">Kirim secara anonim?*</p>
        <div className="d-flex">
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="anonim"
              checked={is_anonim}
              disabled
            />
            <label className="form-check-label" htmlFor="anonim">
              Anonim
            </label>
          </div>
        </div>
      </div>
      {!is_anonim && (
        <div className="col-12">
          <label htmlFor="name" className="fw-bold text-primary">
            Nama Pengguna
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={user_id ? user_id.name : ""}
            disabled
          />
          <label htmlFor="nim" className="mt-2 fw-bold text-primary">
            NIM Pengguna
          </label>
          <input
            type="text"
            className="form-control"
            id="nim"
            value={user_id ? user_id.nim : ""}
            disabled
          />
        </div>
      )}
      <div className="col-md-6">
        <label htmlFor="place_report" className="fw-bold text-primary">
          Tempat Kejadian
        </label>
        <input
          type="text"
          className="form-control"
          id="place_report"
          value={place_report}
          disabled
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="date_report" className="fw-bold text-primary">
          Tanggal Kejadian
        </label>
        <input
          type="text"
          className="form-control"
          id="date_report"
          value={formattedDate}
          disabled
        />
      </div>
      <div className="col-12">
        <label htmlFor="deskripsi" className="fw-bold text-primary">
          Deskripsi Kejadian
        </label>
        <textarea
          id="deskripsi"
          className="form-control deskripsi"
          value={description}
          disabled
        />
      </div>
      <div className="col-12 fw-bold text-primary">
        <p>Bukti</p>
        <a href={evidence} target="_blank" rel="noopener noreferrer">
          {fileName}
        </a>
      </div>
    </div>
  );
}

ProfileDetailReport.propTypes = {
  type: PropTypes.number.isRequired,
  place_report: PropTypes.string.isRequired,
  formattedDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  evidence: PropTypes.string.isRequired,
  is_anonim: PropTypes.bool.isRequired,
  user_id: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nim: PropTypes.number.isRequired,
  }),
  fileName: PropTypes.string.isRequired,
};

export default ProfileDetailReport;
