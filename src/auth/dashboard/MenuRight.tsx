import React from "react";
import Avatar from "../user/Avatar";
import MenuRightItem from "./MenuRightItem";

type Props = {};

const MenuRight = (props: Props) => {
  return (
    <div className="fixed w-full max-w-[401px] bg-white top-0 right-0 bottom-0 rounded-md shadow-md">
      <div className="mt-[24px] ml-6">
        <Avatar></Avatar>
      </div>
      <div className="max-w-[353px] w-full mx-auto mt-[44px]">
        <h1 className="text-orange font-bold leading-[36px] text-[26px] mb-4">
          Tổng quan
        </h1>
        <MenuRightItem></MenuRightItem>
      </div>
    </div>
  );
};

export default MenuRight;
