import React from "react";
import SectionHeader from "../Typography/SectionHeader";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  type Project = {
    title: string;
    description: string;
    imageUrl: string;
    websiteUrl: string;
  };

  const { t } = useTranslation("projects");
  const projectsData = t("projects", { returnObjects: true }) as Project[];

  return (
    <div
      ref={ref}
      className="section flex flex-col items-center px-5 bg-white 2xl:pt-10"
    >
      <SectionHeader title={t("title")} />

      <div className="text-center text-lg mb-4 2xl:mb-8 max-w-[1420px] w-full">
        {t("introductionHeader")}
      </div>

      <div className="w-full max-w-[1420px]">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            buttonLink={project.websiteUrl}
          />
        ))}
      </div>
    </div>
  );
});

export default Projects;
