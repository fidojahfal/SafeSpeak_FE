import React from "react";
import PropTypes from "prop-types";

function Button({
  type = "button",
  primaryOrOutline = "primary",
  marginClass = "",
  children,
  onClickHandler = () => {},
}) {
  return (
    <button
      type={type}
      className={`btn btn-${primaryOrOutline} ${marginClass}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  primaryOrOutline: PropTypes.string.isRequired,
  marginClass: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
