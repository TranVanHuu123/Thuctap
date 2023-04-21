import React from "react";

type Props = {
  id: string;
  name: string;
  label: string;
  type: string;
};

const InputPass = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <label
        className="text-[18px] leading-[27px] mb-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <div className="flex relative items-center">
        <input
          autoComplete="off"
          {...props}
          className="pl-2 w-[440px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
        ></input>
        <img
          className="w-4 h-4 absolute left-[410px]"
          src="/Vector.png"
          alt="Vector"
        />
      </div>
    </div>
  );
};

export default InputPass;
