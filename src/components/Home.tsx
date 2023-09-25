import React, { useCallback } from "react";
import ProjectsButton from "./Buttons/ProjectsButton";
import useScrollToRef from "../hooks/useScrollToRef";
import SocialIcons from "./SocialIcons/SocialIcons";
import { useTranslation } from "react-i18next"; // import this hook

interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const Home: React.ForwardRefRenderFunction<HTMLDivElement, HomeProps> = (
  props,
  ref
) => {
  const { projectsRef, homeRef } = props;
  const scrollToProjects = useScrollToRef(projectsRef);
  const { t } = useTranslation("home"); // use the hook with the 'home' namespace

  return (
    <div
      ref={homeRef}
      className="section flex flex-col sm:p-10 md:p-16 items-center justify-center relative h-[100vh] sm:h-screen"
      style={{
        backgroundImage: 'url("/resources/img/bg-home.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex flex-col items-center gap-4 p-5 pt-8 sm:p-5 lg:pt-20 max-w-4xl   ">
        <h1 className=" 420px:text-xl  sm:text-3xl md:text-4xl lg:text-5xl   text-center relative md:mb-4  font-extrabold">
          {t("title")}
        </h1>
        <p className="text-sm   md:text-xl text-center  mb-2 md:mb-4 ">
          {t("description")}
        </p>
        <ProjectsButton onClick={scrollToProjects} />
      </div>
      <div className="absolute left-0 transform  hidden lg:block">
        <SocialIcons />
      </div>
    </div>
  );
};

export default React.forwardRef(Home);
