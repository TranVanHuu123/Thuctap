import React from "react";
import { DropdownProvider } from "./dropdownContext";

type Props = {
  children: React.ReactNode;
  Option: any;
};

const Dropdown = ({ children, ...props }: Props) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownProvider>
  );
};

export default Dropdown;
