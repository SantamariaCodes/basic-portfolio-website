import React from "react";
import SectionHeader from "./Typography/SectionHeader";
const Projects = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="section  flex flex-col items-center md:pt-10 p-5 bg-white  pb-20"
  >
    <SectionHeader title="PROJECTS" />

    <div className="text-center lg:text-lg">
      Here you will find some of the personal and clients projects that I
      created with each project{" "}
    </div>
    <div className="text-center lg:text-lg">containing its own case study </div>
  </div>
));

export default Projects;
