import React from "react";
import Menubar from "../../auth/user/Menubar";
import DeviceMain from "../../auth/device/DeviceMain";

type Props = {};

const Device = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <DeviceMain></DeviceMain>
    </div>
  );
};

export default Device;
