import React from "react";

type Props = {
  label: string;
  id: string;
  name: string;
  className: string;
  type: string;
  autoComplete: string;
};

const Input = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col  gap-1">
      <label htmlFor={props.id || props.name}>{label}</label>
      <div className="flex relative items-center">
        <input {...props}></input>
      </div>
    </div>
  );
};

export default Input;
