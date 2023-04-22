import React from "react";

type Props = {};

const Avatar = (props: Props) => {
  return (
    <div className="flex justify-center items-center gap-[24px]">
      <img
        className="w-[32px] h-[32px]"
        srcSet="/Frame271.png 2x"
        alt="frame"
      />
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            srcSet="/avatar.png 2x"
            alt="avatr"
          />
        </div>
        <div className="">
          <span>Xin chào</span>
          <h2>Lê Quỳnh Ái Vân</h2>
        </div>
      </div>
    </div>
  );
};

export default Avatar;