import React from "react";
import CustomInput from "../../../components/input/CustomInput";
import CustomButtonDevice from "../../../components/button/CustomButtonDevice";
import RuleRecive from "../../../components/rule/RuleRecive";

type Props = {};

const ServiceInformation = (props: Props) => {
  return (
    <div className="max-w-[1152px] w-full ">
      <div className="w-full bg-white min-h-[550px] h-full rounded-lg">
        <div className="px-6 pt-4">
          <span className="text-[20px] leading-[30px] font-bold text-orange">
            Thông tin dịch vụ
          </span>
          <div className="flex items-center justify-center gap-6">
            <div className="mt-[20px]">
              <CustomInput
                placeholder="201"
                type="text"
                label="Mã dịch vụ: *"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="idservice"
                id="idservice"
                autoComplete="off"
              ></CustomInput>
              <CustomInput
                placeholder="Khám tim mạch"
                type="text"
                label="Tên dịch vụ: *"
                className="mb-4 p-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="name"
                id="name"
                autoComplete="off"
              ></CustomInput>
            </div>
            <div className="mt-5">
              <CustomInput
                placeholder="Mô tả dịch vụ"
                type="text"
                label="Mô tả:"
                className="mb-4 pb-[105px] pt-[10px] w-[553px]  rounded-lg border-[1px] border-solid border-gray"
                name="name"
                id="name"
                autoComplete="off"
              ></CustomInput>
            </div>
          </div>
          <div className="mb-3 ">
            <RuleRecive></RuleRecive>
          </div>
          <span className="text-[14px] leading-[21px] text-gray300 ">
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

export default ServiceInformation;
