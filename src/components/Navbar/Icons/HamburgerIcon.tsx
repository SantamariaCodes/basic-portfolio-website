import React from "react";

interface SvgProps {
  className?: string;
  onClick?: () => void;
}

const HamburgerIcon: React.FC<SvgProps> = ({ className, onClick }) => (
<svg
  onClick={onClick}
  style={{ fill: "#fefae0" }}
  className={`h-6 w-6 ${className}`}
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default HamburgerIcon;
