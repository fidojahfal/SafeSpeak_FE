import moment from "moment";
import { useState } from "react";

// Reference: https://stackoverflow.com/questions/67866155/how-to-handle-onchange-value-in-date-reactjs

export function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    if (event.target.type === "checkbox") {
      setValue(event.target.checked ? 1 : 0);
    } else if (event.target.type === "date") {
      const date = new Date(event.target.value);
      const formattedDate = moment(date).format("YYYY-MM-DD");
      setValue(formattedDate);
    } else {
      setValue(event.target.value);
    }
  };

  return [value, onValueChangeHandler];
}
