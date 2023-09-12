import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import useScrollToRef from "../../hooks/useScrollToRef";
import IconToggle from "./IconsToggle";
import { LanguageSwitcherCommon } from "../Translation/LanguageSwitcherCommon";

interface Link {
  text: string;
  action: () => void;
}

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
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const scrollToHome = useScrollToRef(homeRef);
  const scrollToAbout = useScrollToRef(aboutRef);
  const scrollToProjects = useScrollToRef(projectsRef);
  const scrollToContact = useScrollToRef(contactRef);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const { t } = useTranslation("navbarLinks");

  const links: Link[] = [
    { text: t("about"), action: scrollToAbout },
    { text: t("projects"), action: scrollToProjects },
    { text: t("contact"), action: scrollToContact },
  ];

  return (
    <nav className="bg-white fixed w-full z-50" ref={navRef}>
      <div className="flex items-center justify-between p-3 px-5 md:px-5 2xl:px-8 lg:justify-start lg:py-4">
        <div className="flex items-center " onClick={scrollToHome}>
          <img
            src="/resources/img/portrait.png"
            className="h-10 md:h-12 lg:h-14 2xl:h-16 rounded-full"
            alt=""
          />
          <p className="lg:px-1 font-extrabold text-sm sm:text-base lg:text-lg leading-tight rounded font-yourFontFamily ml-2">
            DIEGO SANTAMARIA
          </p>
        </div>

        <div className="items-center ml-auto hidden lg:flex">
          {links.map((link, index) => (
            <button
              key={index}
              className="font-extrabold lg:px-1 text-base leading-tight rounded font-yourFontFamily mx-5"
              onClick={link.action}
            >
              {link.text}
            </button>
          ))}
          <LanguageSwitcherCommon />
        </div>

        <div className="lg:hidden flex-grow-0">
          <IconToggle isOpen={isOpen} toggle={toggleIsOpen} />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden w-full block flex-grow lg:flex lg:items-center bg-headerBg`}
      >
        <div className="font-extrabold lg:flex lg:flex-grow lg:justify-center w-full">
          {links.map((link, index) => (
            <button
              key={index}
              className="block text-center w-full py-3 hover:bg-gray-200 transition duration-300 ease-in-out lg:inline-block lg:mt-0 lg:mx-2 border-b border-white"
              onClick={() => {
                setIsOpen(false);
                link.action();
              }}
            >
              {link.text}
            </button>
          ))}
        </div>
        <div className="mt-5 pb-5 flex justify-center">
          <LanguageSwitcherCommon />
        </div>
      </div>{" "}
    </nav>
  );
};

export default Navbar;
