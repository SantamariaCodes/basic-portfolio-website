import React from "react";
import SectionHeader from "../Typography/SectionHeader";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  
  const { t } = useTranslation("projects");
  console.log(t('nonWorkingArray:1:ProjectOneNonWorkingDescription'));

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
          title={t(`projectTwoTitle`)}
          description={t(`ProjectTwoDescription`)}
          imageUrl={t(`ProjectTwoImageURl`)}
          buttonLink={t(`ProjectTwoWebsiteUrl`)}
        />
        <ProjectCard
          title={t(`ProjectThreeTitle`)}
          description={t(`ProjectThreeDescription`)}
          imageUrl={t(`ProjectThreeImageURl`)}
          buttonLink={t(`ProjectThreeWebsiteUrl`)}
        />
        <ProjectCard
          title={t(`ProjectFourTitle`)}
          description={t(`ProjectFourDescription`)}
          imageUrl={t(`ProjectFourImageURl`)}
        />
      </div>
    </div>
  );
});

export default Projects;
