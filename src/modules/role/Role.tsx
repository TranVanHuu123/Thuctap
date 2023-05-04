import React from "react";
import Menubar from "../../auth/user/Menubar";
import RoleMain from "../../auth/setting/role/RoleMain";

type Props = {};

const Role = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <RoleMain></RoleMain>
    </div>
  );
};

export default Role;
