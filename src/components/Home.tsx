import React, { useCallback } from "react";
import ProjectsButton from "./Buttons/ProjectsButton";
import useScrollToRef from "../hooks/useScrollToRef"; // Step 1: Import the new hook

interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const Home: React.ForwardRefRenderFunction<HTMLDivElement, HomeProps> = (props, ref) => {
  const { projectsRef, homeRef } = props;
  const scrollToProjects = useScrollToRef(projectsRef); // Step 2: Use the new hook
  
  return (
    <div ref={homeRef} className="section pt-20 flex flex-col items-center">
      <h1 className="text-4xl mb-5 text-center">Hey, I'm Diego Santamaria</h1>
      <p className="text-xl text-center w-4/5 md:w-1/2">
        A Frontend-focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
      </p>
      <ProjectsButton onClick={scrollToProjects} />
    </div>
  );
};

export default React.forwardRef(Home);
