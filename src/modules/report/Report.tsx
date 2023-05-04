import React from "react";
import Menubar from "../../auth/user/Menubar";
import ReportList from "../../auth/report/ReportList";

type Props = {};

const Report = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <ReportList></ReportList>
    </div>
  );
};

export default Report;
