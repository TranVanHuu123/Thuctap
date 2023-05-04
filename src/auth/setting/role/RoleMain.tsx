import React from "react";
import Frame from "../../frame/Frame";
import Avatar from "../../user/Avatar";
import CustomInputSearchService from "../../../components/input/CustomInputSearchService";
import NextPage from "../../../components/table/NextPage";
import TableServiceManager from "../../../components/table/TableServiceManager";
import TableRole from "../../../components/table/TableRole";

type Props = {};

const RoleMain = (props: Props) => {
  return (
    <Frame>
      <div className="mb-[30px] max-w-[1240px] w-full flex  gap-x-[642px] justify-center items-center">
        <div className="flex gap-x-4">
          <div className="flex items-center justify-center gap-x-4">
            <span className="text-[20px] leading-[30px] text-gray300 font-bold ">
              Cài đặt hệ thống
            </span>
            <img
              className="w-[5px] h-[9px]"
              srcSet="/Vector323.png 1x"
              alt="vector"
            />
          </div>
          <span className="text-[20px] leading-[30px] text-orange font-bold">
            Quản lý vai trò
          </span>
        </div>
        <Avatar></Avatar>
      </div>

      <span className="text-[24px] left-9 text-orange font-bold inline-block mb-[16px]">
        Danh sách vai trò
      </span>

      <div className="max-w-[1112px] w-full">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-6"></div>
          <div className="mt-[-15px]">
            <CustomInputSearchService></CustomInputSearchService>
          </div>
        </div>
        <TableRole></TableRole>
      </div>
      <NextPage></NextPage>
    </Frame>
  );
};

export default RoleMain;