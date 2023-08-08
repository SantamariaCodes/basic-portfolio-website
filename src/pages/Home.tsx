import React, { useRef } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Navbar from "../components/Layout/Navbar";
import i18n from "../i18n";
import { LanguageSwitcher } from "../components/Text-design/LanguageSwitcher";

export default function Home() {
  const { t } = useTranslation("home"); // Specify the namespace

  console.log(i18n.t("home.welcomeMessage"));
  console.log(i18n.t("home.home.welcomeMessage"));
  const solutionRef = useRef(null);
  const contactRef = useRef(null); // Define the ref
  const developmentRef = useRef(null); // Define the ref
  const testimonialsRef = useRef(null); // Define the ref

  return (
    <div className="">
      <Navbar
        solutionRef={solutionRef} // Rename serviceRef to solutionRef
        contactRef={contactRef}
        developmentRef={developmentRef}
        testimonialsRef={testimonialsRef}
      ></Navbar>{" "}
    </div>
  );
}
