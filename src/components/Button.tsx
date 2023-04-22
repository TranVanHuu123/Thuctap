import React from "react";

type Props = {
  name: string;
  bg: string;
  text: string;
};

const Button = ({ name, bg, text }: Props) => {
  return (
    <button
      className={`border border-orange max-w-[164px]  w-full h-[40px] text-[16px] leading-[24px] pt-2 pb-2 pl-10 pr-10 
      ${bg || "bg-orange"} rounded-[6px]  ${text || "text-white"} font-bold`}
    >
      {name}
    </button>
  );
};

export default Button;
