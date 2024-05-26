import React from "react";
import PropTypes from "prop-types";

function Input({
  divClassName,
  labelAndId,
  labelClassName = "form-profile-label",
  children,
  type,
  inputClassName = "form-control",
  placeholder = "",
  value = "",
  onChangeHandler = () => {},
  disabled,
  checked,
  required,
  minLength,
  maxLength,
  name,
}) {
  return (
    <div className={divClassName}>
      <label htmlFor={labelAndId} className={labelClassName}>
        {children}
      </label>
      <input
        type={type}
        className={inputClassName}
        id={labelAndId}
        placeholder={
          type !== "checkbox" && type !== "radio" ? placeholder : undefined
        }
        value={type !== "checkbox" ? value : undefined}
        onChange={onChangeHandler}
        disabled={disabled}
        checked={type === "checkbox" || type === "radio" ? checked : undefined}
        required={required}
        minLength={
          type !== "checkbox" && type !== "radio" ? minLength : undefined
        }
        maxLength={
          type !== "checkbox" && type !== "radio" ? maxLength : undefined
        }
        name={type === "radio" ? name : undefined}
      />
    </div>
  );
}

Input.propTypes = {
  divClassName: PropTypes.string,
  labelAndId: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  required: PropTypes.bool.isRequired,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
