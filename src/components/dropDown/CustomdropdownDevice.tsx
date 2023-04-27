import React from "react";

type Props = {
  title: string;
};

const CustomdropdownDevice = ({ ...props }: Props) => {
  return (
    <div className="mb-[17px] mt-[3px]">
      <label className="">{props.title}</label>
      {/* <div className="mt-1 ">
        <select className=" select p-[11px]  w-[300px] outline-none border border-gray rounded-lg">
          <option value="all">Tất cả</option>
        </select>
      </div> */}
      <div className="relative w-[540px] h-11  border border-gray rounded-lg bg-white cursor-pointer">
        <div className="flex items-center justify-between w-full px-4 py-[10px] ">
          <span className="text-[16px] leading-4 font-thin text-colorPl ">
            Chọn loại thiết bị
          </span>
          <span>
            <img srcSet="./fi_chevron-down.png 2x" alt="down" />
          </span>
        </div>
        {/* <div className=" option absolute w-full rounded-lg bg-white text-[16px] leading-6 text-gray400text top-[45px]">
          <ul className="ml-3 ">
            <li className="py-3 l1">Tất cả</li>
            <li className="py-3 l2">Hoạt động</li>
            <li className="py-3 l3">Ngưng hoạt động</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default CustomdropdownDevice;
