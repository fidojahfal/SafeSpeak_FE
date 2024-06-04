import React from "react";
import { IoWarning } from "react-icons/io5";
import { IconContext } from "react-icons";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { unsetNotificationActionCreator } from "../../states/notification/action";

function Alert() {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state);

  if (!notification) {
    return null;
  }

  const onClose = () => {
    dispatch(unsetNotificationActionCreator());
  };

  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      <IconContext.Provider value={{ color: "#58151C", size: "25px" }}>
        <div className="me-2">
          <IoWarning />
        </div>
      </IconContext.Provider>
      {notification}
      <button
        type="button"
        className="btn-close ms-auto"
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
