import React from "react";

type Props = {};

const DetalDeciveMain = (props: Props) => {
  return (
    <div className="max-w-[1112px] w-full ">
      <div className="w-full bg-white min-h-[604px] h-full rounded-lg">
        <div className="px-6 pt-4">
          <span className="text-[20px] leading-[30px] font-bold text-orange">
            Thông tin thiết bị
          </span>
          <div className="flex mb-4 mt-5 gap-x-[326px]">
            <div className="flex gap-x-[43px]">
              <div className="flex flex-col gap-y-4 text-[16px] leading-6 font-semibold">
                <span>Mã thiết bị:</span>
                <span>Tên thiết bị:</span>
                <span>Địa chỉ IP:</span>
              </div>
              <div className="flex flex-col gap-y-4 text-[16px] leading-6 text-gray400text">
                <span>KIO_01</span>
                <span>Kiosk</span>
                <span>128.172.308</span>
              </div>
            </div>
            <div className="flex gap-x-[43px]">
              <div className="flex flex-col gap-y-4 text-[16px] leading-6 font-semibold">
                <span>Loại thiết bị:</span>
                <span>Tên đăng nhập:</span>
                <span>Mật khẩu:</span>
              </div>
              <div className="flex flex-col gap-y-4 text-[16px] leading-6  text-gray400text">
                <span>Kiosk</span>
                <span>Linhkyo011</span>
                <span>CMS</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[16px] leading-6 font-semibold ">
              Dịch vụ sử dụng:
            </span>
            <span className="text-[16px] leading-6 text-gray400text">
              Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai
              mũi họng, Khám hô hấp, Khám tổng quát.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalDeciveMain;
