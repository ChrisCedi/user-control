import React from "react";
import { InputComponent } from "./InputElements";

export const Input = (props) => {
  const { onChange, onBlur, name, ref } = props.elements;

  return (
    <InputComponent
      {...props}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      ref={ref}
    />
  );
};
