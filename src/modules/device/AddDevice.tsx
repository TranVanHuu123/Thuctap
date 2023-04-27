import React from "react";
import Menubar from "../../auth/user/Menubar";
import AddDeviceMain from "../../auth/device/addDevice/AddDeviceMain";

type Props = {};

const AddDevice = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <AddDeviceMain></AddDeviceMain>
    </div>
  );
};

export default AddDevice;
