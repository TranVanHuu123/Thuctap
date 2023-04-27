import React from "react";
import Ractangle2 from "../../auth/form/Ractangle2";
import Input from "../../components/input/CustomInput";
import Button from "../../components/button/CustomButton";

type Props = {};

const Forgotpassword = (props: Props) => {
  return (
    <Ractangle2>
      <div className="mt-[102px] max-w-[440px] w-full ml-[120px]">
        <h1 className="text-[22px] font-bold leading-[22px] text-center mb-4">
          Đặt lại mật khẩu
        </h1>
        <span className="mb-2 text-[18px] leading-[27px] ">
          Vui lòng nhập email để đặt lại mật khẩu của bạn *
        </span>
        <Input
          placeholder=""
          type="text"
          label=""
          className="mb-4 p-2 w-[440px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
          name="name"
          id="name"
          autoComplete="off"
        ></Input>
        <div className="flex gap-[24px] justify-center items-center mt-[48px] ">
          <Button text="text-orange" bg="bg-transparent" name="Hủy"></Button>
          <Button text="" bg="" name="Tiếp tục"></Button>
        </div>
      </div>
    </Ractangle2>
  );
};

export default Forgotpassword;
