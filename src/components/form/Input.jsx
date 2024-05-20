import React from "react";
import PropTypes from "prop-types";

function Input({
  colsize,
  labelAndId,
  type,
  placeholder = "",
  val = "",
  onChangeHandler = () => {},
  children,
  disabletelad,
  required,
  min,
  max,
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
        min={min}
        required
        max={max}
      />
    </div>
  );
}

Input.propTypes = {
  colsize: PropTypes.string.isRequired,
  labelAndId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.boolean.isRequired,
  required: PropTypes.boolean.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
};

export default Input;
