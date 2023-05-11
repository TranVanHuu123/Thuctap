import React, { useEffect, useState } from "react";
import Add from "./Add";
import { Link, useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";

type Props = {};

const Table = (props: Props) => {
  const [userList, setUserList] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const colRef = collection(db, "device");
    onSnapshot(colRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(results);
    });
  }, []);
  return (
    <div className="w-full mt-4 bg-white rounded-xl">
      <Add></Add>
      <table className="w-full ">
        <thead>
          <tr>
            <th>Mã thiết bị</th>
            <th>Tên thiết bị</th>
            <th>Địa chỉ IP</th>
            <th>Trạng thái hoạt động</th>
            <th>Trạng thái kết nối </th>
            <th>Dịch vụ sử dụng</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 &&
            userList.map((device: any) => (
              <tr key={device.id}>
                <td>{device?.devicecode}</td>
                <td>{device?.namedevice}</td>
                <td>{device?.ipaddress}</td>
                <td>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red"></div>
                    <span>Ngưng hoạt động</span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red"></div>
                    <span>Mất kết nối</span>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col">
                    <div>
                      <span>{device.dichvu}</span>
                    </div>
                    <div className="underline text-blueSer">
                      <a href="q">Xem thêm</a>
                    </div>
                  </div>
                </td>
                <td className="underline cursor-pointer text-blueSer">
                  <span
                    onClick={() => navigate(`/detaildevice?id=${device.id}`)}
                  >
                    Chi tiết
                  </span>
                </td>
                <td className="underline cursor-pointer text-blueSer">
                  <span
                    onClick={() => navigate(`/updatedevice?id=${device.id}`)}
                  >
                    Cập nhật
                  </span>
                  {/* <Link to={"/updatedevice"}>Cập nhật</Link> */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
