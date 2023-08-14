import React from "react";
import HamburgerIcon from "./Icons/CrossIcon";
import CrossIcon from "./Icons/HamburgerIcon";

interface IconToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

const IconToggle: React.FC<IconToggleProps> = ({ isOpen, toggle }) => {
  return isOpen ? (
    <HamburgerIcon onClick={toggle} />
  
  ) : (
    <CrossIcon onClick={toggle} />
  );
};

export default IconToggle;
