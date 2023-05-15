import React, { useEffect, useState } from "react";
import Add from "./Add";
import AddService from "./AddService";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";
import InputTime from "../input/InputTime";
import Customdropdown from "../dropDown/Customdropdown";

type Props = {};

const TableService = (props: Props) => {
  const [serviceList, setServiceList] = useState<any>([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const colRef = collection(db, "service");
    const newRef = filter
      ? query(colRef, where("idservice", "==", filter))
      : colRef;
    onSnapshot(newRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setServiceList(results);
    });
  }, [filter]);
  return (
    <div className="max-w-[1112px] w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-6">
          <Customdropdown title="Trạng thái hoạt động"></Customdropdown>
          <div className="flex items-center justify-center gap-4">
            <InputTime className="w-[150px]" title="Chọn thời gian"></InputTime>
            <img
              className="w-[5px] h-[5px]"
              src="/Vector154.png"
              alt="Vector"
            />
            <InputTime className="w-[150px]" title="Chọn thời gian"></InputTime>
          </div>
        </div>
        <div className="mt-[-15px]">
          <div className="">
            <span className="text-[16px] leading-6 font-semibold">Từ khoá</span>
            <div className="relative flex items-center">
              <input
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Nhập từ khóa"
                autoComplete="off"
                className="pl-2 w-[300px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
              ></input>
              <img
                className="w-4 h-4 absolute left-[269px]"
                src="/fi_search.png"
                alt="Vector"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 bg-white rounded-xl">
        <AddService></AddService>
        <table className="w-full ">
          <thead>
            <tr>
              <th>Mã dịch vụ</th>
              <th>Tên dịch vụ </th>
              <th>Mô tả</th>
              <th>Trạng thái hoạt động</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {serviceList.length > 0 &&
              serviceList.map((item: any) => (
                <tr key={item.id}>
                  <td>{item?.idservice}</td>
                  <td>{item?.name}</td>
                  <td>{item?.describe}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red"></div>
                      <span>Ngưng hoạt động</span>
                    </div>
                  </td>
                  <td className="underline cursor-pointer text-blueSer">
                    <span
                      onClick={() => navigate(`/detailservice?id=${item.id}`)}
                    >
                      Chi tiết
                    </span>
                  </td>
                  <td className="underline cursor-pointer text-blueSer">
                    <span
                      onClick={() => navigate(`/updateservice?id=${item.id}`)}
                    >
                      Cập nhật
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableService;
