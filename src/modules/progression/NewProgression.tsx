import React from "react";
import Menubar from "../../auth/user/Menubar";
import New from "../../auth/progression/New";

type Props = {};

const NewProgression = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <New></New>
    </div>
  );
};

export default NewProgression;
