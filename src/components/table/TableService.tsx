import React, { useEffect, useState } from "react";
import Add from "./Add";
import AddService from "./AddService";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";

type Props = {};

const TableService = (props: Props) => {
  const [serviceList, setServiceList] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const colRef = collection(db, "service");
    onSnapshot(colRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setServiceList(results);
    });
  }, []);
  return (
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
  );
};

export default TableService;
