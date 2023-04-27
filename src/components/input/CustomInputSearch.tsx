import React from "react";

type Props = {};

const CustomInputSearch = ({ ...props }: Props) => {
  return (
    <div className="">
      <span className="text-[16px] leading-6 font-semibold">Từ khoá</span>
      <div className="relative flex items-center">
        <input
          placeholder="Nhập từ khóa"
          autoComplete="off"
          className="pl-2 w-[300px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
        ></input>
        <img
          className="w-4 h-4 absolute left-[269px]"
          src="/fi_search.png"
          alt="Vector"
        />
      </div>
    </div>
  );
};

export default CustomInputSearch;
