import React from "react";
import PropTypes from "prop-types";

const AlasanDitolak = ({ alasanDitolak }) => {
  return (
    <div>
      <h5 className="mb-3">Alasan Penolakan</h5>
      <div className="border p-3">
        <p>{alasanDitolak}</p>
      </div>
    </div>
  );
};

AlasanDitolak.propTypes = {
  alasanDitolak: PropTypes.string.isRequired,
};

export default AlasanDitolak;
