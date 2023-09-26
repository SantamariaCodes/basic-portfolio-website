import React from "react";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="section  flex flex-col items-center md:pt-10 p-5 bg-white  pb-20"
  >
    <h2 className="my-5 pb-2 md:pb-4  420px:text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center relative font-extrabold">
      PROJECTS
      <span className="absolute left-1/2 bottom-0 transform translate-x-[-50%] w-[70%] h-1 bg-deepBlue"></span>
    </h2>

    <div className="text-center lg:text-lg">
      Here you will find some of the personal and clients projects that I
      created with each project{" "}
    </div>
    <div className="text-center lg:text-lg">containing its own case study </div>
  </div>
));

export default Projects;
