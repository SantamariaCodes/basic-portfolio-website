import React from "react";
import SubsectionHeader from "../Typography/SubsectionHeader ";
import ProjectLinkButton from "./ProjectLinkButton";
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  buttonLink,
}) => {
  return (
    <div>
      <div className="flex flex-col lg:grid lg:grid-cols-12 bg-white  2xl:py-16  gap-4 lg:gap-10 2xl:gap-16 items-center  lg:mt-5">
        <div className="lg:col-span-7 bg-white">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full  object-cover"
          />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-4 justify-center text-center lg:text-left ">
          <SubsectionHeader title={title} />
          <p className="text-gray-600 font-semibold leading-7 text-lg">{description}</p>
          <div className="lg:pt-5">
            <ProjectLinkButton label="View Project" url="https://example.com" />
          </div>
        </div>
        <div className="lg:col-span-2"></div>{" "}
      </div>
    </div>
  );
};

export default ProjectCard;
