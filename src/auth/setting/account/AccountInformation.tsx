import React from "react";
import CustomInput from "../../../components/input/CustomInput";
import CustomdropdownDevice from "../../../components/dropDown/CustomdropdownDevice";
import CustomButtonDevice from "../../../components/button/CustomButtonDevice";

type Props = {};

const AccountInformation = (props: Props) => {
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
                placeholder="Nhập họ tên"
                type="text"
                label="Họ tên: *"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="name"
                id="name"
                autoComplete="off"
              ></CustomInput>
              <CustomInput
                placeholder="Nhập số điện thoại"
                type="text"
                label="Số điện thoại:*"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="telephone"
                id="telephone"
                autoComplete="off"
              ></CustomInput>
              <CustomInput
                placeholder="Nhập email"
                type="email"
                label="Email: *"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="email"
                id="email"
                autoComplete="off"
              ></CustomInput>
              <CustomdropdownDevice title="Vai trò: *"></CustomdropdownDevice>
            </div>
            <div className="mt-[20px]">
              <CustomInput
                placeholder="Nhập tên đăng nhập"
                type="text"
                label="Tên đăng nhập:*"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="nameaccount"
                id="nameaccount"
                autoComplete="off"
              ></CustomInput>
              <CustomInput
                placeholder="Nhập mật khẩu"
                type="password"
                label="Mật khẩu: *"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="password"
                id="password"
                autoComplete="off"
              ></CustomInput>
              <CustomInput
                placeholder="Nhập mật khẩu"
                type="password"
                label="Nhập lại mật khẩu: *"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="againpassword"
                id="againpassword"
                autoComplete="off"
              ></CustomInput>
              <CustomdropdownDevice title="Tình trạng: *"></CustomdropdownDevice>
            </div>
          </div>

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
        <CustomButtonDevice text="" bg="" name="Cập nhật "></CustomButtonDevice>
      </div>
    </div>
  );
};

export default AccountInformation;
