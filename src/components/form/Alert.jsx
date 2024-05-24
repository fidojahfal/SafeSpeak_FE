import React from "react";
import { IoWarning } from "react-icons/io5";
import { IconContext } from "react-icons";
import { PropTypes } from "prop-types";

function Alert({
  message = "A simple warning alert—check it out!",
  onClose = () => {},
}) {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      <IconContext.Provider value={{ color: "#58151C", size: "25px" }}>
        <div className="me-2">
          <IoWarning />
        </div>
      </IconContext.Provider>
      {message}
      <button
        type="button"
        className="btn-close ms-auto"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
