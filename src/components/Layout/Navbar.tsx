import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../Text-design/LanguageSwitcher";

interface SvgProps {
  className?: string;
  onClick?: () => void;
}

const CrossIcon: React.FC<SvgProps> = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={`fill-current h-6 w-6 ${className}`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 8.586l7.071-7.071 1.414 1.414L11.414 10l7.071 7.071-1.414 1.414L10 11.414l-7.071 7.071-1.414-1.414L8.586 10 1.515 2.929 2.929 1.515 10 8.586z" />
  </svg>
);

const HamburgerIcon: React.FC<SvgProps> = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={`fill-current h-6 w-6 ${className}`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("navbar");

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const links = [
    "navbarLinks.solutions",
    "navbarLinks.process",
    "navbarLinks.testimonials",
    "navbarLinks.ContactUs",
  ];
  

  return (
    <div className="bg-headerBg fixed w-full top-0 z-50 max-w-[2000px]">
      <nav className="flex items-center justify-between p-5 pt-7 lg:pt-5 md:px-10 2xl:px-20">
        <div>
          <img
            src="/resources/header/tuyoLogo.svg"
            alt="Logo"
            className="h-6 md:h-7 lg:h-10 xl:h-12 md:mb-0"
          />
        </div>

        <div className="hidden  lg:flex flex-grow justify-center items-center  lg:pl-5 xl:pr-20">
          {links.map((link, index) => (
            <span
              key={index}
              className="text-black font-semibold mx-1 xl:px-2  lg:px-1 text-lg lg:text-xl leading-tight rounded font-yourFontFamily hover:text-gray-700"
            >
              {t(link)}
            </span>
          ))}
        </div>

        <div className="hidden lg:flex ml-auto text-black">
          {/* Place your LanguageSwitcher component here */}
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleIsOpen}
            className="flex items-center text-black"
          >
            {isOpen ? <CrossIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden w-full block flex-grow lg:flex lg:items-center bg-headerBg px-10  sm:px-20`}
      >
        <div className="text-black font-semibold lg:flex lg:flex-grow lg:justify-center">
          {links.map((link, index) => (
            <span
              key={index}
              className="block mt-10 mb-10 lg:inline-block lg:mt-0 lg:mx-2 border-b border-black pb-3 hover:text-gray-700"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t(link)}
            </span>
          ))}
        </div>
        <div className="mt-5 pb-5 flex justify-center text-black">
          <LanguageSwitcher></LanguageSwitcher>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
