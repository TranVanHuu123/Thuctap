import React from "react";

type Props = {};

const Add = (props: Props) => {
  return (
    <div className="absolute w-[80px] h-[94px] bg-redor  flex justify-center items-center flex-col p-2 translate-x-[1124px]">
      <img className="" srcSet="/addsquare.png 2x" alt="add" />
      <span className="text-[14px] leading-5 text-orange font-bold mx-2">
        Thêm thiết bị
      </span>
    </div>
  );
};

export default Add;
