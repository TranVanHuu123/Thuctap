import Checkbox from "antd/es/checkbox/Checkbox";
import React from "react";

type Props = {};

const DetailLeft = (props: Props) => {
  return (
    <div className="max-w-[370px] w-full min-h-[606px] h-full bg-white rounded-xl pt-4 pl-4">
      <div>
        <span className="text-[20px] leading-[30px] font-bold text-orange ">
          Thông tin dịch vụ
        </span>
        <div className="flex mt-3 gap-x-7">
          <div className="flex flex-col gap-y-3">
            <span>Mã dịch vụ:</span>
            <span>Tên dịch vụ: </span>
            <span>Mô tả:</span>
          </div>
          <div className="flex flex-col gap-y-3 text-[16px] leading-6 text-gray400text">
            <span>201</span>
            <span>Khám tim mạch </span>
            <span>Chuyên các bệnh lý về tim</span>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-[20px] leading-[30px] font-bold text-orange ">
          Quy tắc cấp số
        </span>
        <div className="flex flex-col mt-3 gap-y-6">
          <div className="flex items-center gap-x-[15px]">
            <span>Tăng tự động từ:</span>
            <input
              type="text"
              placeholder="0001"
              className="w-[64px] h-11 rounded-lg p-3 border border-gray"
            ></input>
            <span>đến</span>
            <input
              type="text"
              placeholder="9999"
              className="w-[64px] h-11 rounded-lg p-3 border border-gray"
            ></input>
          </div>
          <div className="flex items-center gap-x-[88px]">
            <span>Prefix:</span>
            <input
              type="text"
              placeholder="0001"
              className="w-[64px] h-11 rounded-lg p-3 border border-gray"
            ></input>
          </div>
          <span>Reset mỗi ngày</span>
          <span>Ví dụ: 201-2001</span>
        </div>
      </div>
    </div>
  );
};

export default DetailLeft;
