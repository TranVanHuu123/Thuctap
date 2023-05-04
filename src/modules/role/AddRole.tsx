import React from "react";
import Menubar from "../../auth/user/Menubar";
import AddRoleMain from "../../auth/setting/role/AddRoleMain";

type Props = {};

const AddRole = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <AddRoleMain></AddRoleMain>
    </div>
  );
};

export default AddRole;
