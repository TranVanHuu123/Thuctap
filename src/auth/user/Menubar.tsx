import React from "react";
import Menu from "../menu/Menu";

type Props = {
  children: React.ReactNode;
};

const Menubar = ({ children }: Props) => {
  return (
    <div className="bg-bg">
      <div className="fixed bg-white max-w-[200px] w-full min-h-screen top-0 left-0 bottom-0 rounded-md  border-gray shadow-lg">
        <div className="flex justify-center items-center mt-8">
          <img srcSet="/logoalta.png 2x" alt="" />
        </div>
        <Menu></Menu>
        <div className="flex justify-center items-center mt-[233px]">
          <button className=" flex justify-center items-center gap-3 w-[176px] h-[48px]  rounded-lg bg-redor text-colorred">
            <img srcSet="/logout.png 2x" alt="logout" />
            Đăng xuất
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Menubar;
