// hooks/useInput.js
import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    if (target.type === "checkbox") {
      setValue(target.checked);
    }
    setValue(target.value);
  }

  return [value, handleValueChange, setValue];
}

export default useInput;
