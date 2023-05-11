import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useParams, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { userRole } from "../../../uilts/constants";
import { useAuth } from "../../../context/Auth-context";
import Label from "../../../components/label/Label";
import Input from "../../../components/input/Input";
import CustomButton from "../../../components/button/CustomButton";
import { db } from "../../../firebase-app/Firebase-config";
import { toast } from "react-toastify";

type Props = {};

const UpdateDeviceInformation = (props: Props) => {
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
  });
  const { userInfo } = useAuth();
  const [devicetype, setDevicetype] = useState<any>([]);

  const [params] = useSearchParams();
  const deviceId = params.get("id");

  useEffect(() => {
    async function fetchData() {
      if (!deviceId) return null;
      const docRef = doc(db, "device", deviceId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        reset(docSnapshot.data());
      }
    }
    fetchData();
  }, [deviceId, reset]);
  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "devicetype");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let result: any[] = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setDevicetype(result);
    }
    getData();
  }, []);
  const handleUpdateUser = async (values: any) => {
    if (!deviceId) return null;
    if (!isValid) return;
    // if (userInfo?.role !== userRole.ADMIN) {
    //   Swal.fire("Failed", "You have no right to do this action", "warning");
    //   return;
    // }
    try {
      const docRef = doc(db, "device", deviceId);
      await updateDoc(docRef, { ...values });
      toast.success("Update user information successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Update user failed!");
    }
  };
  return (
    <form onSubmit={handleSubmit(handleUpdateUser)}>
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
                    htmlFor="devicecode"
                  >
                    Mã thiết bị: *
                  </Label>
                  <Input
                    control={control}
                    placeholder="Nhập mã thiết bị"
                    type="text"
                    className="mb-4 pl-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="devicecode"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="namedevice"
                  >
                    Tên thiết bị: *
                  </Label>
                  <Input
                    control={control}
                    placeholder="Tên thiết bị:"
                    type="text"
                    className="mb-4 pl-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="namedevice"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="ipaddress"
                  >
                    Địa chỉ IP: *
                  </Label>
                  <Input
                    control={control}
                    placeholder="Nhập địa chỉ IP"
                    type="text"
                    className="mb-4 pl-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="ipaddress"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
              </div>
              <div className="mt-[23px] flex-1">
                <div className="mb-[17px] mt-[3px]">
                  <div className="flex flex-col gap-y-[3px]">
                    <label className="text-[16px] leading-6 font-semibold">
                      Loại thiết bị: *
                    </label>
                    <select className="p-[9px] border rounded-lg border-gray">
                      {devicetype.length > 0 &&
                        devicetype.map((item: any) => (
                          <option
                            key={item.id}
                            onClick={() => setValue("devicetypeId", item.id)}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="nameaccount"
                  >
                    Tên đăng nhập: *
                  </Label>
                  <Input
                    control={control}
                    placeholder="Nhập tài khoản"
                    type="text"
                    className="mb-4 pl-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
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
                    Mật khẩu: *
                  </Label>
                  <Input
                    control={control}
                    placeholder="Nhập mật khẩu"
                    type="password"
                    className="mb-4 pl-2 w-[540px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="password"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Label
                className="text-[16px] leading-6 font-semibold"
                htmlFor="dichvu"
              >
                Dịch vụ sử dụng: *
              </Label>
              <Input
                control={control}
                placeholder="Nhập dịch vụ sử dụng"
                type="text"
                className="mb-4 p-2 max-w-[1104px] w-full h-[44px] rounded-lg border-[1px] border-solid border-gray"
                name="dichvu"
                autoComplete="off"
              >
                <span></span>
              </Input>
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

export default UpdateDeviceInformation;
