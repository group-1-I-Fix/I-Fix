import React, { useState } from "react";
import "./InputField.css";

const InputField = ({
  label,
  errorMessage,
  onChangeHandler,
  id,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (event) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      {errorMessage === "" ? (
        <label>{label}</label>
      ) : (
        <label>
          {label}
          <code>*</code>
        </label>
      )}
      <input
        {...inputProps}
        onChange={onChangeHandler}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        className="input-t"
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputField;
