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
  accept,
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
          value={value}
          disabled={disabled}
        ></textarea>
      ) : (
        <input
          type={type}
          className={inputClassName}
          id={labelAndId}
          placeholder={
            type !== "checkbox" && type !== "radio" && type !== "file"
              ? placeholder
              : undefined
          }
          value={type !== "checkbox" && type !== "file" ? value : undefined}
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
          min={type === "number" || type === "date" ? min : undefined}
          max={type === "number" || type === "date" ? max : undefined}
          accept={type === "file" ? accept : undefined}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  divClassName: PropTypes.string,
  labelAndId: PropTypes.string,
  labelClassName: PropTypes.string,
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeHandler: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
