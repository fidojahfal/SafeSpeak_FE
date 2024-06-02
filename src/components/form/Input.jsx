import React from "react";
import PropTypes from "prop-types";

function Input({
  divClassName,
  labelAndId,
  labelClassName = "form-blue-label-semibold",
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
  min,
  max,
  name,
}) {
  return (
    <div className={divClassName}>
      <label htmlFor={labelAndId} className={labelClassName}>
        {children}
      </label>
      {type === "textarea" ? (
        <textarea
          id={labelAndId}
          placeholder={placeholder}
          className={inputClassName}
          onChange={onChangeHandler}
          required={required}
        ></textarea>
      ) : (
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
          checked={
            type === "checkbox" || type === "radio" ? checked : undefined
          }
          required={required}
          minLength={
            type !== "checkbox" && type !== "radio" ? minLength : undefined
          }
          maxLength={
            type !== "checkbox" && type !== "radio" ? maxLength : undefined
          }
          name={type === "radio" ? name : undefined}
          min={type === "number" ? min : undefined}
          max={type === "number" ? max : undefined}
        />
      )}
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
  min: PropTypes.string,
  max: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
