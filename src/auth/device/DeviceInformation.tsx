import React from "react";
import CustomInput from "../../components/input/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import CustomButtonDevice from "../../components/button/CustomButtonDevice";
import CustomdropdownDevice from "../../components/dropDown/CustomdropdownDevice";

type Props = {};

const DeviceInformation = (props: Props) => {
  return (
    <div className="max-w-[1152px] w-full ">
      <div className="w-full bg-white min-h-[550px] h-full rounded-lg">
        <div className="px-6 pt-4">
          <span className="text-[20px] leading-[30px] font-bold text-orange">
            Thông tin thiết bị
          </span>
          <div className="flex gap-6">
            <div className="mt-[20px]">
              <CustomInput
                placeholder="Nhập mã thiết bị"
                type="text"
                label="Tên đăng nhập: *"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="name"
                id="name"
                autoComplete="off"
              ></CustomInput>
              <CustomInput
                placeholder="Nhập tên thiết bị"
                type="text"
                label="Tên thiết bị:*"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="nameDevice"
                id="nameDevice"
                autoComplete="off"
              ></CustomInput>
              <CustomInput
                placeholder="Nhập địa chỉ IP"
                type="text"
                label="Địa chỉ IP: *"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="address"
                id="address"
                autoComplete="off"
              ></CustomInput>
            </div>
            <div className="mt-[20px]">
              <CustomdropdownDevice title="Loại thiết bị: *"></CustomdropdownDevice>
              <CustomInput
                placeholder="Nhập tài khoản"
                type="text"
                label="Tên đăng nhập:*"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="account"
                id="account"
                autoComplete="off"
              ></CustomInput>
              <CustomInput
                placeholder="Nhập mật khẩu"
                type="text"
                label="Mật khẩu: *"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="password"
                id="password"
                autoComplete="off"
              ></CustomInput>
            </div>
          </div>
          <CustomInput
            placeholder="Nhập dịch vụ sử dụng"
            type="text"
            label="Dịch vụ sử dụng: *"
            className="mb-4 p-2 max-w-[1104px] w-full h-[44px] rounded-lg border-[1px] border-solid border-gray"
            name="name"
            id="name"
            autoComplete="off"
          ></CustomInput>
          <span className="text-[14px] leading-[21px] text-gray300">
            * Là trường thông tin bắt buộc
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 mt-6">
        <CustomButtonDevice
          text="text-orange"
          bg="bg-redor"
          name="Hủy bỏ"
        ></CustomButtonDevice>
        <CustomButtonDevice
          text=""
          bg=""
          name="Thêm thiết bị"
        ></CustomButtonDevice>
      </div>
    </div>
  );
};

export default DeviceInformation;
