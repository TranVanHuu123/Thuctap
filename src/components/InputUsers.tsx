import React from "react";

type Props = {
  label: string;
  id: string;
  name: string;
  autoComplete: string;
};

const InputUsers = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col ml-[296px] mt-[2.1rem]">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="w-[384px] h-[44px]  bg-gray50 rounded-md mt-2 p-2 text-gray400text"
        {...props}
      ></input>
    </div>
  );
};

export default InputUsers;
