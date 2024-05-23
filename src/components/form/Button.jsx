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
  type: PropTypes.string,
  primaryOrOutline: PropTypes.string,
  marginClass: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};

export default Button;
