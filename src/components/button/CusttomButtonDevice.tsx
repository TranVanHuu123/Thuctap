import React from "react";

type Props = {
  name: string;
};

const CusttomButtonDevice = ({ ...props }: Props) => {
  return (
    <button className="max-w-[186px] w-full h-7 text-white text-[14px] leading-[19px] flex justify-center items-center gap-4 rounded-lg font-bold bg-orange">
      <span>{props.name}</span>
      <img srcSet="/fi_x.png 2x" alt="fix" />
    </button>
  );
};

export default CusttomButtonDevice;
