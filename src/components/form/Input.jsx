<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
=======
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> 8cd1cf2a084c391b94fdac3843b05c1ed3e2520b

function Input({
  colsize,
  labelAndId,
  type,
  placeholder = '',
  val = '',
  onChangeHandler = () => {},
  children,
<<<<<<< HEAD
  disabletelad,
=======
  disabled,
>>>>>>> 8cd1cf2a084c391b94fdac3843b05c1ed3e2520b
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
<<<<<<< HEAD
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
=======
  colsize: PropTypes.string,
  labelAndId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  val: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChangeHandler: PropTypes.func,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
>>>>>>> 8cd1cf2a084c391b94fdac3843b05c1ed3e2520b
};

export default Input;
