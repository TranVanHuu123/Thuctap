import React from "react";
import Menubar from "../../auth/user/Menubar";
import DetailServiceMain from "../../auth/service/detailService/DetailServiceMain";

type Props = {};

const DetailService = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <DetailServiceMain></DetailServiceMain>
    </div>
  );
};

export default DetailService;
