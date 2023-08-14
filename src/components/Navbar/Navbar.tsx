import React, { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../Text-design/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import useScrollToRef from "../../hooks/useScrollToRef"; // Import the hook
import IconToggle from "./IconsToggle";
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

  // Use the new hook for scrolling functionality
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
    <div className="bg-headerBg bg-white fixed w-full top-0 z-50 max-w-[2000px]">
      <nav className="flex items-center justify-between p-5 pt-7 lg:pt-5 md:px-10 2xl:px-20">
        <div>
          <img
            src="/resources/header/tuyoLogo.svg"
            alt="Logo"
            className="h-6 md:h-7 lg:h-10 xl:h-12 md:mb-0"
            onClick={scrollToHome}
          />
        </div>

        <div className="hidden lg:flex flex-grow justify-center items-center lg:pl-5 xl:pr-20">
          {links.map((link, index) => (
            <button 
              key={index}
              className="text-black  font-semibold mx-1 xl:px-2 lg:px-1 text-lg lg:text-xl leading-tight rounded font-yourFontFamily"
              onClick={link.action}
            >
              {link.text}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex ml-auto">
          <LanguageSwitcher />
        </div>

        <div className="lg:hidden">
          <IconToggle isOpen={isOpen} toggle={toggleIsOpen} /> {/* Updated with IconToggle */}
        </div>
      </nav>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden w-full block flex-grow lg:flex lg:items-center bg-headerBg px-10 sm:px-20`}
      >
        <div className="text-black font-semibold lg:flex lg:flex-grow lg:justify-center w-full">
          {links.map((link, index) => (
            <Link
              key={index}
              to="#"
              className="block text-center w-full mt-10 mb-10 lg:inline-block lg:mt-0 lg:mx-2 border-b border-white pb-3"
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
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
