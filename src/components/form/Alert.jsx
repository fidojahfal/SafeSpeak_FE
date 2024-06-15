import React from "react";
import { IoWarning } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
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
    <div
      className={`alert alert-${notification.type} d-flex align-items-center`}
      role="alert"
    >
      {notification.type === "danger" && (
        <IconContext.Provider value={{ color: "#58151C", size: "25px" }}>
          <div className="me-2">
            <IoWarning />
          </div>
        </IconContext.Provider>
      )}
      {notification.type === "success" && (
        <IconContext.Provider value={{ color: "#0C4128", size: "25px" }}>
          <div className="me-2">
            <FaCheckCircle />
          </div>
        </IconContext.Provider>
      )}
      {notification.message}
      <button
        type="button"
        className="btn-close ms-auto"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
