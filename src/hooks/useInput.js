import { useState } from "react";

export function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    if (event.target.type === "checkbox") {
      setValue(event.target.checked);
    } else {
      setValue(event.target.value);
    }
  };

  return [value, onValueChangeHandler];
}
