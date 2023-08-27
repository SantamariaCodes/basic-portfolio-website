import React, { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../Text-design/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import useScrollToRef from "../../hooks/useScrollToRef";
import IconToggle from "./IconsToggle";
import { LanguageSwitcherCommon } from "../Text-design/LanguageSwitcherCommon";

interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToHome = useScrollToRef(homeRef);
  const scrollToAbout = useScrollToRef(aboutRef);
  const scrollToProjects = useScrollToRef(projectsRef);
  const scrollToContact = useScrollToRef(contactRef);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const { t } = useTranslation("navbarLinks");

  const links = useMemo(
    () => [
      { text: t("home"), action: scrollToHome },
      { text: t("about"), action: scrollToAbout },
      { text: t("projects"), action: scrollToProjects },
      { text: t("contact"), action: scrollToContact },
    ],
    [t, scrollToHome, scrollToAbout, scrollToProjects, scrollToContact]
  );

  return (
    <div className="bg-headerBg bg-white fixed w-full top-0 z-50">
      <nav className="flex items-center justify-between p-5 pt-7 lg:pt-5 md:px-10 2xl:px-10 lg:justify-start">
        <div className="">
          <p>Diego Santamaria</p>
        </div>
        
        <div className="hidden lg:flex flex-grow justify-end items-center">
          {links.map((link, index) => (
            <button
              key={index}
              className="text-black font-semibold mx-1 xl:px-2 lg:px-1 text-lg lg:text-xl leading-tight rounded font-yourFontFamily"
              onClick={link.action}
            >
              {link.text}
            </button>
          ))}
        </div>
        
        <div className="lg:hidden flex-grow-0">
          <IconToggle isOpen={isOpen} toggle={toggleIsOpen} />
        </div>
      </nav>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden w-full block flex-grow lg:flex lg:items-center bg-headerBg `}
      >
        <div className="text-black font-semibold lg:flex lg:flex-grow lg:justify-center w-full">
          {links.map((link, index) => (
            <Link
              key={index}
              to="#"
              className="block text-center w-full py-3  hover:bg-gray-200 transition duration-300 ease-in-out lg:inline-block lg:mt-0 lg:mx-2 border-b border-white"
              onClick={() => {
                setIsOpen(false);
                link.action();
              }}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="mt-5 pb-5 flex justify-center">
          <LanguageSwitcherCommon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
