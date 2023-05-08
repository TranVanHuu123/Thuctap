import React, { useState } from "react";
import InputPass from "../../components/input/CustomInputPass";
import Button from "../../components/button/CustomButton";
import Ractangle2 from "../../auth/form/Ractangle2";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import IconPassword from "../../components/icons/IconPassword";
import { useForm } from "react-hook-form";

type Props = {};

const ResetPassword = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });
  return (
    <Ractangle2>
      <div className="mt-[102px] ml-[90px]  max-w-[440px] w-full ">
        <form>
          <h1 className="text-[22px] font-bold leading-[22px] text-center mb-4">
            Đặt lại mật khẩu mới
          </h1>
          <div className="flex flex-col gap-1 mt-4">
            <Label className="" htmlFor="password">
              Mật khẩu *
            </Label>
            <Input
              autoComplete="off"
              control={control}
              name="password"
              placeholder="lequynhaivan01"
              type={`${showPassword ? "text" : "password"}`}
              className=" w-[440px] h-[44px]  border-gray"
            >
              <IconPassword
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconPassword>
            </Input>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <Label className="" htmlFor="againpassword">
              Mật khẩu *
            </Label>
            <Input
              autoComplete="off"
              control={control}
              name="againpassword"
              placeholder="lequynhaivan01"
              type={`${showPassword ? "text" : "password"}`}
              className=" w-[440px] h-[44px]  border-gray"
            >
              <IconPassword
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconPassword>
            </Input>
          </div>
          <div className=" flex justify-center items-center mt-[48px]">
            <Button
              className="max-w-[164px]  w-full h-[40px]"
              text=""
              bg=""
              name="Xác nhận "
            ></Button>
          </div>
        </form>
      </div>
    </Ractangle2>
  );
};

export default ResetPassword;
