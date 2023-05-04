import React from "react";
import Add from "./Add";
import AddAccount from "./AddAccount";

type Props = {};

const TableAccount = (props: Props) => {
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
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.com</td>
            <td>Kế toán</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Cập nhật</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableAccount;
