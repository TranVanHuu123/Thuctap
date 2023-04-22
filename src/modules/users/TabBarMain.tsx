import React from "react";
import Menubar from "../../auth/user/Menubar";
import InputUsers from "../../components/InputUsers";
import Avatar from "../../auth/user/Avatar";

type Props = {};

const TabBarMain = (props: Props) => {
  return (
    <Menubar>
      <div className="ml-[224px]  min-h-screen">
        <div className=" mr-[64px] flex justify-between pt-[29px]">
          <h1 className=" text-orange text-[20px] leading-[30px] font-bold">
            Thông tin cá nhân
          </h1>
          <Avatar></Avatar>
        </div>
        <div className="relative max-w-[1112px] h-[397px] w-full  mt-[109px] bg-white shadow-md rounded-xl ">
          <div>
            <div className="absolute w-[248px] h-[248px] rounded-full top-10 ml-[24px]">
              <div>
                <img
                  className="relative w-full h-full object-cover"
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
          <div className=" absolute">
            <InputUsers
              label="Tên người dùng"
              id="nameuser"
              name="nameuser"
              autoComplete="off"
            ></InputUsers>
            <InputUsers
              label="Số điện thoại"
              id="number"
              name="number"
              autoComplete="off"
            ></InputUsers>{" "}
            <InputUsers
              label="Email"
              id="email"
              name="email"
              autoComplete="off"
            ></InputUsers>
          </div>
          <div className=" absolute left-[407px]  ">
            <InputUsers
              label="Tên đăng nhập"
              id="namelog"
              name="namelog"
              autoComplete="off"
            ></InputUsers>
            <InputUsers
              label="Mật khẩu"
              id="password"
              name="password"
              autoComplete="off"
            ></InputUsers>{" "}
            <InputUsers
              label="Vai trò"
              id="role"
              name="role"
              autoComplete="off"
            ></InputUsers>
          </div>
        </div>
      </div>
    </Menubar>
  );
};

export default TabBarMain;
