import React from "react";
import Menubar from "../../auth/user/Menubar";
import ServiceMain from "../../auth/service/ServiceMain";

type Props = {};

const ServiceList = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <ServiceMain></ServiceMain>
    </div>
  );
};

export default ServiceList;
