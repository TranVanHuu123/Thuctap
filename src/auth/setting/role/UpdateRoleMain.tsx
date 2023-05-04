import React from "react";
import Frame from "../../frame/Frame";
import PageDevice from "../../../components/titleDevicePage/PageDevice";
import Avatar from "../../user/Avatar";
import AddRoleMainLeft from "./AddRoleMainLeft";
import AddRoleMainRight from "./AddRoleMainRight";
import CustomButtonDevice from "../../../components/button/CustomButtonDevice";

type Props = {};

const UpdateRoleMain = (props: Props) => {
  return (
    <Frame>
      <div className="mb-[30px]  w-[1240px]   ">
        <div className="relative flex w-full ">
          <div className="flex items-center justify-center gap-x-4">
            <PageDevice title="Cài đặt hệ thống"></PageDevice>
            <PageDevice title=" Quản lý vai trò"></PageDevice>
            <span className="text-[20px] leading-[30px] text-orange font-bold">
              Cập nhật vai trò
            </span>
          </div>
          <div className="absolute right-0 -top-1">
            <Avatar></Avatar>
          </div>
        </div>
      </div>
      <span className="text-[24px] left-9 text-orange font-bold inline-block mb-[16px]">
        Danh sách vai trò
      </span>

      <div className="max-w-[1192px] w-full ">
        <div className="w-full bg-white h-[604px] pt-6 rounded-2xl pl-6">
          <div className="flex gap-x-3">
            <AddRoleMainLeft></AddRoleMainLeft>
            <AddRoleMainRight></AddRoleMainRight>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 mt-6">
        <CustomButtonDevice
          text="text-orange"
          bg="bg-redor"
          name="Hủy bỏ"
        ></CustomButtonDevice>
        <CustomButtonDevice text="" bg="" name="Cập nhật"></CustomButtonDevice>
      </div>
    </Frame>
  );
};

export default UpdateRoleMain;
