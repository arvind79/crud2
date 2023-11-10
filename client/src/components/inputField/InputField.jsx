import "./style.scss";

import React from "react";

const InputField = (props) => {
  // console.log(props);

  return (
    <div className="input-field">
      <label>{props.label}</label>
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {
        props.error && props.isTouched ?  <p>{props.error}</p> : ""
      }
    </div>
  );
};

export default InputField;
