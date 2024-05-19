import React from "react";

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

export default Button;
