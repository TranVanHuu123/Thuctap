import React, { useEffect, useState } from "react";
import Add from "./Add";
import AddNewProgression from "./AddNewProgression";
import AddReport from "./AddReport";
import AddRole from "./AddRole";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";

type Props = {};

const TableRole = (props: Props) => {
  const [roleList, setRoleList] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const colRef = collection(db, "role");
    onSnapshot(colRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setRoleList(results);
    });
  }, []);
  return (
    <div className="w-full mt-4 bg-white rounded-xl">
      <AddRole></AddRole>
      <table className="w-full ">
        <thead>
          <tr>
            <th>Tên vai trò</th>
            <th>Số người dùng</th>
            <th>Mô tả</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {roleList.length > 0 &&
            roleList.map((item: any) => (
              <tr>
                <td>{item?.name}</td>
                <td>6</td>
                <td>{item?.describes}</td>
                <td className="underline cursor-pointer text-blueSer">
                  <span onClick={() => navigate(`/updaterole?id=${item.id}`)}>
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

export default TableRole;
