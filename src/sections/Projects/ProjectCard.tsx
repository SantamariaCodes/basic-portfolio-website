import React from "react";
import SubsectionHeader from "../../components/Typography/SubsectionHeader ";
import ProjectLinkButton from "./ProjectLinkButton";
import { useTranslation } from "react-i18next";
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonLink?: string;  
  isCompleted?: boolean;  

}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  buttonLink,
  isCompleted = true,  
}) => {
  const { t } = useTranslation("projects");

  return (
    <div>
      <div className="flex flex-col lg:grid lg:grid-cols-12  2xl:py-16  gap-4 lg:gap-10 2xl:gap-16 items-center  lg:mt-5">
        <div className="lg:col-span-7 ">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4 justify-center text-center lg:text-left ">
          <SubsectionHeader title={title} />
          <p className=" font-semibold leading-7 text-lg">
            {description}
          </p>
          <div className="lg:pt-5">
          {isCompleted && buttonLink && <ProjectLinkButton label={t("buttonText")} url={buttonLink} />}  {/* Updated conditional render */}
          </div>
        </div>
        <div className="lg:col-span-2"></div>
      </div>
    </div>
  );
};


export default ProjectCard;
