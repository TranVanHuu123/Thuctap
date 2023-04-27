import React from "react";
import Ractangle from "../../auth/form/Ractangle";
import Input from "../../components/input/CustomInput";
import Button from "../../components/button/CustomButton";

type Props = {};

const login = (props: Props) => {
  return (
    <Ractangle>
      <form className="mt-[83px] ml-[94px] max-w-[440px] ">
        <Input
          placeholder=""
          type="text"
          label="Tên đăng nhập *"
          className="mb-4 p-2 w-[440px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
          name="name"
          id="name"
          autoComplete="off"
        ></Input>
        <div className="flex flex-col gap-1">
          <span>Mật khẩu *</span>
          <div className="relative flex items-center">
            <input
              type="password"
              className="pl-2 w-[440px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
            ></input>
            <img
              className="w-4 h-4 absolute left-[410px]"
              src="/Vector.png"
              alt="Vector"
            />
          </div>
        </div>
        <div className=" leading-[21px] text-red mt-3 text-[14px] font-[400] flex gap-2">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_84_5581)">
              <path
                d="M10.228 18.8327C14.8304 18.8327 18.5613 15.1017 18.5613 10.4993C18.5613 5.89698 14.8304 2.16602 10.228 2.16602C5.62561 2.16602 1.89465 5.89698 1.89465 10.4993C1.89465 15.1017 5.62561 18.8327 10.228 18.8327Z"
                stroke="#E73F3F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.228 13.834H10.2364"
                stroke="#E73F3F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.228 7.16602V10.4993"
                stroke="#E73F3F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_84_5581">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.228027 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          Sai mật khẩu hoặc tên đăng nhập
        </div>
        <div className=" flex justify-center items-center mt-[19px]">
          <Button text="" bg="" name="Đăng nhập"></Button>
        </div>
        <span className="block  leading-[21px] text-red  text-[14px] font-[400] mt-2 ml-[173px]">
          Quên mật khẩu
        </span>
      </form>
    </Ractangle>
  );
};

export default login;
