import React from "react";
import CustomInput from "../../../components/input/CustomInput";

type Props = {};

const AddRoleMainLeft = (props: Props) => {
  return (
    <div className="max-w-[560px] w-full">
      <span className="text-[20px] leading-[30px] text-orange font-bold">
        Thông tin vai trò
      </span>
      <div className="mt-4">
        <CustomInput
          placeholder="Nhập tên vai trò"
          type="text"
          label="Tên vai trò *"
          className="mb-4 p-2 w-[550px] h-[44px] rounded-lg border-[1px] border-solid border-gray "
          name="name"
          id="name"
          autoComplete="off"
        ></CustomInput>
        <CustomInput
          placeholder="Nhập mô tả"
          type="text"
          label="Mô tả:"
          className="mb-4 p-2 w-[550px] h-[44px] rounded-lg border-[1px] border-solid border-gray pb-[130px] pt-4"
          name="name"
          id="name"
          autoComplete="off"
        ></CustomInput>
        <span>* Là trường thông tin bắt buộc</span>
      </div>
    </div>
  );
};

export default AddRoleMainLeft;
