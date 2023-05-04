import React from "react";
import Menubar from "../../auth/user/Menubar";
import Manager from "../../auth/progression/Manager";

type Props = {};

const ProgressionList = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <Manager></Manager>
    </div>
  );
};

export default ProgressionList;
