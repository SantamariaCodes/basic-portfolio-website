import React from "react";
import SectionHeader from "../Typography/SectionHeader";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

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
];

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  // Use the useTranslation hook
  const { t } = useTranslation("projects");

  return (
    <div
      ref={ref}
      className="section flex flex-col items-center px-5 bg-white 2xl:pt-10"
    >
      <SectionHeader title={t("title")} />

      <div className="text-center lg:text-lg mb-4 2xl:mb-8 max-w-[1420px] w-full">
        {t("introductionHeader")}
      </div>

      <div className="w-full max-w-[1420px]">
        <ProjectCard
          title={t(`projectOneTitle`)}
          description={t(`ProjectOneDescription`)}
          imageUrl={t(`ProjectImageURl`)}
          buttonLink={t(`ProjectOneWebsiteUrl`)}
        />
        <ProjectCard
          title={t(`projectOneTitle`)}
          description={t(`ProjectOneDescription`)}
          imageUrl={t(`ProjectImageURl`)}
          buttonLink={t(`ProjectOneLink`)}
        />
      </div>
    </div>
  );
});

export default Projects;
