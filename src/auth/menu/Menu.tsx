import React from "react";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="mt-[58px]">
      <ul className="list-none leading-24 text-4 ">
        <li className="menu-item">
          <img className="menu-icon" srcSet="/element4.png 2x" alt="element" />
          Dashboard
        </li>
        <li className="menu-item">
          <img
            className="menu-icon"
            srcSet="/monitor123.png 2x"
            alt="monitor"
          />
          Thiết bị
        </li>
        <li className="menu-item">
          <img className="menu-icon" srcSet="/Frame332.png 2x" alt="frame" />
          Dịch vụ
        </li>
        <li className="menu-item">
          <img className="menu-icon" srcSet="/icon3.png 2x" alt="icon" />
          Cấp số
        </li>
        <li className="menu-item">
          <img className="menu-icon" srcSet="/Frame.png 3x" alt="frame" />
          Báo cáo
        </li>
        <li className="menu-itemlast">
          <img className="menu-icon" srcSet="/setting.png 2x" alt="setting" />
          Cài đặt hệ thống
        </li>
      </ul>
    </div>
  );
};

export default Menu;
