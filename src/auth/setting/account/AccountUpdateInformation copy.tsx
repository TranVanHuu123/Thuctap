import React, { useEffect } from "react";
import CustomdropdownDevice from "../../../components/dropDown/CustomdropdownDevice";
import Input from "../../../components/input/Input";
import Label from "../../../components/label/Label";
import CustomButton from "../../../components/button/CustomButton";
import { useForm } from "react-hook-form";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-app/Firebase-config";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

type Props = {};

const AccountUpdateInformation = (props: Props) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
  });
  const [params] = useSearchParams();
  const accountId = params.get("id");
  useEffect(() => {
    async function fetchData() {
      if (!accountId) return null;
      const docRef = doc(db, "account", accountId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        reset(docSnapshot.data());
      }
    }
    fetchData();
  }, [accountId, reset]);
  const handleUpdateAccount = async (values: any) => {
    if (!accountId) return null;
    if (!isValid) return;
    // if (userInfo?.role !== userRole.ADMIN) {
    //   Swal.fire("Failed", "You have no right to do this action", "warning");
    //   return;
    // }
    try {
      const docRef = doc(db, "account", accountId);
      await updateDoc(docRef, { ...values });
      toast.success("Update user information successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Update user failed!");
    }
  };
  return (
    <form onSubmit={handleSubmit(handleUpdateAccount)}>
      <div className="max-w-[1152px] w-full ">
        <div className="w-full bg-white min-h-[550px] h-full rounded-lg">
          <div className="px-6 pt-4">
            <span className="text-[20px] leading-[30px] font-bold text-orange">
              Thông tin thiết bị
            </span>
            <div className="flex gap-6">
              <div className="mt-[20px] flex-1">
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="fullname"
                  >
                    Họ tên: *
                  </Label>
                  <Input
                    placeholder="Nhập họ tên"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="fullname"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="telephone"
                  >
                    Số điện thoại:*
                  </Label>
                  <Input
                    placeholder="Nhập số điện thoại"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="telephone"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="email"
                  >
                    Email: *
                  </Label>
                  <Input
                    placeholder="Nhập email"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="email"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>

                <CustomdropdownDevice title="Vai trò: *"></CustomdropdownDevice>
              </div>
              <div className="mt-[20px] flex-1">
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="nameaccount"
                  >
                    Tên đăng nhập:*
                  </Label>
                  <Input
                    placeholder="Nhập tên đăng nhập"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="nameaccount"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="password"
                  >
                    Mật khẩu:*
                  </Label>
                  <Input
                    placeholder="Nhập mật khẩu"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="password"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="againpassword"
                  >
                    Nhập lại mật khẩu: *
                  </Label>
                  <Input
                    placeholder="Nhập mật khẩu"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="againpassword"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>

                <CustomdropdownDevice title="Tình trạng: *"></CustomdropdownDevice>
              </div>
            </div>

            <span className="text-[14px] leading-[21px] text-gray300">
              * Là trường thông tin bắt buộc
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 mt-6">
          <CustomButton
            text="text-orange"
            bg="bg-redor"
            name="Hủy bỏ"
            className="max-w-[180px]  w-full h-[48px] text-[16px] leading-[22px] pt-3 pb-3 pl-6 pr-6 "
          ></CustomButton>
          <CustomButton
            className="max-w-[180px]  w-full h-[48px] text-[16px] leading-[22px] pt-3 pb-3 pl-6 pr-6 "
            text=""
            bg=""
            name="Cập nhật"
          ></CustomButton>
        </div>
      </div>
    </form>
  );
};

export default AccountUpdateInformation;
