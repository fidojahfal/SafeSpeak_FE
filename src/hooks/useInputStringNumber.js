import { useState } from "react";

// function to check is value is a non-negative number
function isValidNumber(value) {
  return /^(?!-)\d+$/.test(value);
}

export function useInputStringNumberValidation(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    const { value } = event.target;
    if (value === "" || isValidNumber(value)) {
      setValue(value);
    }
  };

  return [value, onValueChangeHandler];
}
