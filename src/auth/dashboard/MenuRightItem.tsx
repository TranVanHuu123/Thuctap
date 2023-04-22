import React from "react";

type Props = {};

const MenuRightItem = (props: Props) => {
  return (
    <div className=" w-full ">
      <div className="w-full py-[11px] px-4 rounded-[15px] flex justify-between  shadowitem ">
        <div>
          <img srcSet="/Frame625210.png 2x" alt="img" />
        </div>
        <div className="">
          <span className="leading-[36px] text-[24px] font-[800] text-gray400text">
            4.221
          </span>
          <span className="flex items-center text-orange gap-[2px]">
            <img
              className="w-[14px] h-[14px] "
              srcSet="/monitor2.png 2x"
              alt="minitor"
            />
            Thiết bị
          </span>
        </div>
        <div className="my-auto">
          <div className="flex justify-center items-center">
            <img className="w-1 h-1" srcSet="/Frame625214.png" alt="img" />
            <span className="text-[12px] leading-[21px] text-gray300 ml-1 mr-3">
              Đang hoạt động
            </span>
            <h3 className="text-[14px] leading-[18px] font-bold text-orange">
              3.799
            </h3>
          </div>
          <div className="flex justify-center items-center -ml-[12px]">
            <img className="w-1 h-1 " srcSet="/Frame625215.png" alt="img" />
            <span className="text-[12px] leading-[21px] text-gray300 ml-1 mr-1">
              Ngưng hoạt động
            </span>
            <h3 className="text-[14px] leading-[18px] font-bold text-orange">
              422
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRightItem;
