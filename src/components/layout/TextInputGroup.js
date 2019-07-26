import React from "react";
import classnames from "classnames";

function TextInputGroup({
  label,
  name,
  defaultVal,
  placeholder,
  type,
  onChange,
  ref,
  errors
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={
          "form-control form-control-lg " +
          (errors === undefined || errors === "" ? "" : "is-invalid")
        }
        placeholder={placeholder}
        defaultValue={defaultVal}
        onChange={onChange}
        ref={ref}
      />

      {errors && <div className="invalid-feedback">{errors}</div>}
      {/* {console.log("HI")} */}
    </div>
  );
}

TextInputGroup.defaultProps = {
  type: "text",
  placeholder: "Fill here"
};
export default TextInputGroup;
