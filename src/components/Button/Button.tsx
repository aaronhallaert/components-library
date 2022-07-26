import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={"bg-cyan-500 py-2 px-8 rounded hover:bg-cyan-400"}>
      {props.label}
    </button>
  );
};

export default Button;
