import { Link } from "react-router-dom";
import React, { useState, useCallback, useMemo } from "react";
import { LanguageSwitcher } from "../Text-design/LanguageSwitcher";
import { useTranslation } from "react-i18next";

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

const HamburgerIcon: React.FC<SvgProps> = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={`text-black h-6 w-6 ${className}`} // Updated here
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

interface NavbarProps {
  solutionRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  developmentRef: React.RefObject<HTMLDivElement>;
  testimonialsRef: React.RefObject<HTMLDivElement>;
}

const useScrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
  return useCallback(() => {
    if (ref.current) {
      const top =
        ref.current.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [ref]);
};

const Navbar: React.FC<NavbarProps> = ({
  solutionRef,
  contactRef,
  developmentRef,
  testimonialsRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSolution = useScrollToRef(solutionRef);
  const scrollToContact = useScrollToRef(contactRef);
  const scrollToDevelopment = useScrollToRef(developmentRef);
  const scrollToTestimonials = useScrollToRef(testimonialsRef);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const { t } = useTranslation("navbarLinks");
  const links = useMemo(
    () => [
      { text: t("home"), action: scrollToSolution },
      { text: t("about"), action: scrollToDevelopment },
      {
        text: t("projects"),
        action: scrollToTestimonials,
      },
      { text: t("contact"), action: scrollToContact },
    ],
    [
      t,
      scrollToSolution,
      scrollToDevelopment,
      scrollToTestimonials,
      scrollToContact,
    ]
  );

  return (
    <div className="bg-headerBg fixed w-full top-0 z-50 max-w-[2000px]">
      <nav className="flex items-center justify-between p-5 pt-7 lg:pt-5 md:px-10 2xl:px-20">
        <div>
          <img
            src="/resources/header/tuyoLogo.svg"
            alt="Logo"
            className="h-6 md:h-7 lg:h-10 xl:h-12 md:mb-0"
            onClick={scrollToTop}
          />
        </div>

        <div className="hidden lg:flex flex-grow justify-center items-center lg:pl-5 xl:pr-20">
          {links.map((link, index) => (
            <button // Replaced Link with button
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
          <button
            onClick={toggleIsOpen}
            className="flex items-center text-white"
          >
            {isOpen ? <CrossIcon /> : <HamburgerIcon />}
          </button>
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
