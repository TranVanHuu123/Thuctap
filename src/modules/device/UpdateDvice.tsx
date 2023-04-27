import React from "react";
import Menubar from "../../auth/user/Menubar";
import UpdateMainDevice from "../../auth/device/updateDevice/UpdateMainDevice";

type Props = {};

const UpdateDvice = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <UpdateMainDevice></UpdateMainDevice>
    </div>
  );
};

export default UpdateDvice;
