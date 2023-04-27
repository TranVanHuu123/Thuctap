import React from "react";
import { Button } from "antd";
type Props = {
  name: string;
  bg: string;
  text: string;
};

const CustomButtonDevice = ({ name, bg, text }: Props) => {
  return (
    <Button
      className={`border border-orange max-w-[147px]  w-full h-[48px] text-[16px] leading-[22px] pt-3 pb-3 pl-6 pr-6 
      ${bg || "bg-orange"} rounded-[6px]  ${text || "text-white"} font-bold`}
    >
      {name}
    </Button>
  );
};

export default CustomButtonDevice;
