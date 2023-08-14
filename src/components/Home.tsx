import React, { useCallback } from "react";
import ProjectsButton from "./Buttons/ProjectsButton";
import useScrollToRef from "../hooks/useScrollToRef";
import SocialIcons from "./SocialIcons/SocialIcons";

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

  return (
    <div
      ref={homeRef}
      className="h-screen section pt-[100px] flex flex-col items-center justify-center relative"
    >
      <h1 className="text-4xl mb-5 text-center relative z-10">
        Hey, I'm Diego Santamaria
      </h1>

      {/* Place the SocialIcons outside the h1 and visible only on screens above lg */}
      <div className="absolute left-0 transform z-10 hidden lg:block">
        <SocialIcons />
      </div>

      <p className="text-xl text-center w-4/5 md:w-1/2 z-10">
        A Frontend-focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product.
      </p>

      <ProjectsButton onClick={scrollToProjects} />
    </div>
  );
};

export default React.forwardRef(Home);
