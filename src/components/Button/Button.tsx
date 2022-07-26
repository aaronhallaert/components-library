import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={"border-gray-300 border rounded"}>{props.label}</button>
  );
};

export default Button;
