import React from "react";

interface SvgProps {
  className?: string;
  onClick?: () => void;
}

const CrossIcon: React.FC<SvgProps> = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={`text-black h-6 w-6 ${className}`} // Updated here
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 8.586l7.071-7.071 1.414 1.414L11.414 10l7.071 7.071-1.414 1.414L10 11.414l-7.071 7.071-1.414-1.414L8.586 10 1.515 2.929 2.929 1.515 10 8.586z" />
  </svg>
);

export default CrossIcon;
