import React from "react";

function Input({
  colsize,
  labelAndId,
  type,
  placeholder = "",
  val = "",
  onChangeHandler = () => {},
  children,
  disabled,
}) {
  return (
    <div className={`col-${colsize}`}>
      <label htmlFor={labelAndId} className="form-profile-label">
        {children}
      </label>
      <input
        type={type}
        className="form-control"
        id={labelAndId}
        placeholder={placeholder}
        value={val}
        onChange={onChangeHandler}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
