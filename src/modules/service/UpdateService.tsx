import React from "react";
import Menubar from "../../auth/user/Menubar";
import UpdateServiceMain from "../../auth/service/updateService/UpdateServiceMain";

type Props = {};

const UpdateService = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <UpdateServiceMain></UpdateServiceMain>
    </div>
  );
};
export default UpdateService;
