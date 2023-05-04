import React from "react";
import Menubar from "../../auth/user/Menubar";
import AddRoleMain from "../../auth/setting/role/AddRoleMain";
import UpdateRoleMain from "../../auth/setting/role/UpdateRoleMain";

type Props = {};

const UpdateRole = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <UpdateRoleMain></UpdateRoleMain>
    </div>
  );
};

export default UpdateRole;
