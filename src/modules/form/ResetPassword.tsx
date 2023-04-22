import React from "react";
import InputPass from "../../components/InputPass";
import Button from "../../components/Button";
import Ractangle2 from "../../auth/form/Ractangle2";

type Props = {};

const ResetPassword = (props: Props) => {
  return (
    <Ractangle2>
      <div className="mt-[102px] ml-[90px]  max-w-[440px] w-full ">
        <form>
          <h1 className="text-[22px] font-bold leading-[22px] text-center mb-4">
            Đặt lại mật khẩu mới
          </h1>
          <InputPass
            type="password"
            label="Mật khẩu"
            name="name"
            id="name"
          ></InputPass>
          <InputPass
            type="password"
            label="Nhập lại mật khẩu"
            name="name"
            id="name"
          ></InputPass>
          <div className=" flex justify-center items-center mt-[48px]">
            <Button text="" bg="" name="Xác nhận "></Button>
          </div>
        </form>
      </div>
    </Ractangle2>
  );
};

export default ResetPassword;
