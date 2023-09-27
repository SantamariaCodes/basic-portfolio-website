import React from "react";
import SectionHeader from "../Typography/SectionHeader";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Tuyo Dev",
    description:
      "This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This ",
    imageUrl: "/resources/img/tuyoDev.png",
  },
  {
    title: "Tuyo Dev",
    description:
      "This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This ",
    imageUrl: "/resources/img/tuyoDev.png",
  },
  {
    title: "Tuyo Dev",
    description:
      "This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This This is a description of Project 1.This ",
    imageUrl: "/resources/img/tuyoDev.png",
  },
];

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="section flex flex-col items-center px-5   bg-white 2xl:pt-10 "
  >
    <SectionHeader title="PROJECTS" />

    <div className="text-center lg:text-lg mb-4 2xl:mb-8 max-w-[1420px] w-full">
      Here you will find some of the personal and clients projects that I
      created. With each project:
    </div>

    <div className="w-full  max-w-[1420px]">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          buttonLink="/link/to/project"
        />
      ))}
    </div>
  </div>
));

export default Projects;
