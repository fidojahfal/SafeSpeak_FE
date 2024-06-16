import React from "react";
import PropTypes from "prop-types";

function Button({
  type = "button",
  primaryOrOutline = "primary",
  marginClass = "",
  children,
  onClickHandler = () => {},
  target,
  disabled,
}) {
  if (target) {
    return (
      <button
        type={type}
        className={`btn btn-${primaryOrOutline} ${marginClass}`}
        onClick={onClickHandler}
        data-bs-toggle="modal"
        data-bs-target={target}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      className={`btn btn-${primaryOrOutline} ${marginClass}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  primaryOrOutline: PropTypes.string,
  marginClass: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClickHandler: PropTypes.func,
  target: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
