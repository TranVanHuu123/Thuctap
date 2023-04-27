import React from "react";
import { Button } from "antd";
type Props = {
  name: string;
  bg: string;
  text: string;
};

const CustomButton = ({ name, bg, text }: Props) => {
  return (
    <Button
      className={`border border-orange max-w-[164px]  w-full h-[40px] text-[16px] leading-[24px] pt-2 pb-2 pl-10 pr-10 
      ${bg || "bg-orange"} rounded-[6px]  ${text || "text-white"} font-bold`}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
