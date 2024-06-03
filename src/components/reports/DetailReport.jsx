import React from "react";
import PropTypes from "prop-types";

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
  isEdit,
}) {
  const formattedDate = formatDate(date_report);

  return (
    <>
      <h5 className="mb-3">
        {title} - <span>{formattedDate}</span>
      </h5>
      <div className="row gy-3 gx-4">
        <div className="col-md-4">
          <p className="mb-2">Jenis Kejadian</p>
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
          <p className="mb-2">Jenis Kejadian</p>
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
            <label htmlFor="name" className="">
              Nama Pengguna
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={user_id ? user_id.name : ""}
              disabled
            />
            <label htmlFor="nim" className="mt-2">
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
          <label htmlFor="place_report" className="">
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
          <label htmlFor="date_report" className="">
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
          <label htmlFor="deskripsi" className="">
            Deskripsi Kejadian
          </label>
          <textarea
            id="deskripsi"
            className="form-control deskripsi"
            value={description}
            disabled
          />
        </div>
        <div className="col-12">
          <p>Bukti</p>
          <a
            href={`/uploads/${evidence}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {evidence}
          </a>
        </div>
      </div>
    </>
  );
}

DetailReport.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  place_report: PropTypes.string.isRequired,
  date_report: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  evidence: PropTypes.string.isRequired,
  is_anonim: PropTypes.bool.isRequired,
  user_id: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nim: PropTypes.number.isRequired,
  }),
  isEdit: PropTypes.bool,
};

DetailReport.defaultProps = {
  user_id: null,
  isEdit: false,
};

export default DetailReport;
