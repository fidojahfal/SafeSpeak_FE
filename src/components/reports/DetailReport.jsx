import React from 'react';
import PropTypes from 'prop-types';
import Button from '../form/Button';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { IconContext } from 'react-icons';

const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

const getFileNameFromUrl = (url) => {
  return url.substring(url.lastIndexOf('/') + 1);
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
        <h5 className="mb-2 mb-md-0">
          {title} - <span>{formattedDate}</span>
        </h5>
        <div className="d-flex flex-column flex-md-row align-items-center gap-2 gap-md-3">
          {isDosen && (
            <p
              className={`badge rounded-pill fs-6 ${
                status === 0
                  ? 'bg-warning text-brown'
                  : status === 1
                  ? 'bg-primary text-white'
                  : status === 2
                  ? 'text-bg-success'
                  : 'text-bg-danger'
              }`}
            >
              {status === 0
                ? 'Diterima'
                : status === 1
                ? 'Ditindaklanjuti'
                : status === 2
                ? 'Selesai'
                : 'Ditolak'}
            </p>
          )}
          {!isDosen && (
            <div className="d-flex gap-2 flex-wrap">
              <Button
                marginClass="btn btn-secondary d-flex align-items-center"
                onClickHandler={handleEditClick}
              >
                <IconContext.Provider value={{ size: '25px' }}>
                  <div>
                    <MdEdit />
                  </div>
                </IconContext.Provider>
                <p className="m-0 ms-2">Update</p>
              </Button>
              <Button
                marginClass="btn btn-danger d-flex align-items-center"
                target="#deleteModal"
              >
                <IconContext.Provider value={{ size: '25px' }}>
                  <div>
                    <MdDeleteForever />
                  </div>
                </IconContext.Provider>
                <p className="m-0 ms-2">Delete</p>
              </Button>
            </div>
          )}
        </div>
      </div>
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
              value={user_id ? user_id.name : ''}
              disabled
            />
            <label htmlFor="nim" className="mt-2 fw-bold text-primary">
              NIM Pengguna
            </label>
            <input
              type="text"
              className="form-control"
              id="nim"
              value={user_id ? user_id.nim : ''}
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
          <a href={`{evidence}`} target="_blank" rel="noopener noreferrer">
            {fileName}
          </a>
        </div>
      </div>
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
