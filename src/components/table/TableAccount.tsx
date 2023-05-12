import React, { useEffect, useState } from "react";
import Add from "./Add";
import AddAccount from "./AddAccount";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";

type Props = {};

const TableAccount = (props: Props) => {
  const [accountList, setAccountList] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const colRef = collection(db, "account");
    onSnapshot(colRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setAccountList(results);
    });
  }, []);
  return (
    <div className="w-full mt-4 bg-white rounded-xl">
      <AddAccount></AddAccount>
      <table className="w-full ">
        <thead>
          <tr>
            <th>Tên đăng nhập</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Trạng thái kết nối </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {accountList.length > 0 &&
            accountList.map((item: any) => (
              <tr>
                <td>{item?.nameaccount}</td>
                <td>{item?.fullname}</td>
                <td>{item?.telephone}</td>
                <td>{item?.email}</td>
                <td>Kế toán</td>
                <td>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red"></div>
                    <span>Ngưng hoạt động</span>
                  </div>
                </td>
                <td className="underline cursor-pointer text-blueSer">
                  <span
                    onClick={() => navigate(`/updateaccount?id=${item.id}`)}
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

export default TableAccount;
