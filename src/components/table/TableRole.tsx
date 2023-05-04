import React from "react";
import Add from "./Add";
import AddNewProgression from "./AddNewProgression";
import AddReport from "./AddReport";
import AddRole from "./AddRole";

type Props = {};

const TableRole = (props: Props) => {
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
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRole;
