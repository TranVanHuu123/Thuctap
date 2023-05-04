import React from "react";
import Menubar from "../../auth/user/Menubar";
import AddServiceMain from "../../auth/service/addService/AddServiceMain";

type Props = {};

const AddService = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <AddServiceMain></AddServiceMain>
    </div>
  );
};

export default AddService;
