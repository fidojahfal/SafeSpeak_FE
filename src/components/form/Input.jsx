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
  disabled,
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
  colsize: PropTypes.string,
  labelAndId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  onChangeinHandler: PropTypes.func,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string,
};

export default Input;
