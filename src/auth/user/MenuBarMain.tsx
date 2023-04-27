import React from "react";
import CustomInputUsers from "../../components/input/CustomInputUsers";
import Avatar from "./Avatar";

type Props = {};

const MenuBarMain = (props: Props) => {
  return (
    <div>
      <div className="ml-[224px]  min-h-screen ">
        <div className=" mr-[64px] flex justify-between pt-[29px]">
          <h1 className=" text-orange text-[20px] leading-[30px] font-bold">
            Thông tin cá nhân
          </h1>
          <Avatar></Avatar>
        </div>
        <div className="flex relative gap-x-6  max-w-[1112px] h-[397px] w-full  mt-[109px] bg-white shadow-md rounded-xl ">
          <div className="mt-[40px]">
            <div className=" w-[248px] h-[248px] rounded-full top-10 ml-[24px]">
              <div>
                <img
                  className="relative object-cover w-full h-full"
                  srcSet="/avatar2.png 3x"
                  alt="avatar"
                />
                <img
                  className="absolute left-[163px] top-[213px]"
                  srcSet="Group624817.png 2x"
                  alt=""
                />
              </div>
              <h1 className="absolute mt-5 left-[38px] text-[24px] leading-[36px] font-bold">
                Lê Quỳnh Ái Vân
              </h1>
            </div>
          </div>
          <div className="flex gap-x-6 mt-[20px] max-w-[808px] w-full">
            <div className=" max-w-[384px] w-full">
              <CustomInputUsers
                label="Tên người dùng"
                id="nameuser"
                name="nameuser"
                autoComplete="off"
              ></CustomInputUsers>
              <CustomInputUsers
                label="Số điện thoại"
                id="number"
                name="number"
                autoComplete="off"
              ></CustomInputUsers>
              <CustomInputUsers
                label="Email"
                id="email"
                name="email"
                autoComplete="off"
              ></CustomInputUsers>
            </div>
            <div className="max-w-[384px] w-full">
              <CustomInputUsers
                label="Tên đăng nhập"
                id="namelog"
                name="namelog"
                autoComplete="off"
              ></CustomInputUsers>
              <CustomInputUsers
                label="Mật khẩu"
                id="password"
                name="password"
                autoComplete="off"
              ></CustomInputUsers>
              <CustomInputUsers
                label="Vai trò"
                id="role"
                name="role"
                autoComplete="off"
              ></CustomInputUsers>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBarMain;
